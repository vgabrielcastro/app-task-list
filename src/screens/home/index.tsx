import React, {useState, useEffect} from 'react';
import {Button, Header, Input, Title, Wrapper, WrapperInput} from './styles';
import {FontAwesome} from '@expo/vector-icons';
import Tarefa from './Tasks';
import {EmptyState} from '../../components/EmptyState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native';

type TaskType = {
  key: number;
  item: string;
};

export function Home() {
  const [task, setTask] = useState('');
  const [list, setList] = useState<TaskType[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('@tasks');
        if (savedTasks) {
          setList(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };

    loadTasks();
  }, []);

  const saveTasksToStorage = async (tasks: TaskType[]) => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const handleAddNewTask = () => {
    if (task === '') {
      return;
    }

    const newTask = {
      key: Date.now(),
      item: task,
    };

    const updatedList = [newTask, ...list];
    setList(updatedList);
    setTask('');
    saveTasksToStorage(updatedList);
  };

  const handleDeleteTask = (item: any) => {
    const filteredTasks = list.filter((task) => task.item !== item);
    setList(filteredTasks);
    saveTasksToStorage(filteredTasks);
  };

  return (
    <Wrapper>
      <Header>
        <Title>Tarefas</Title>
        <WrapperInput>
          <Input
            placeholder="Digite sua tarefa..."
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <Button onPress={handleAddNewTask}>
            <FontAwesome name="plus" size={20} color="#FFF" />
          </Button>
        </WrapperInput>
      </Header>

      <FlatList
        style={{flex: 1, backgroundColor: '#fff', padding: 4}}
        data={list}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item}) => (
          <Tarefa data={item} deleteItem={() => handleDeleteTask(item.item)} />
        )}
        ListEmptyComponent={
          <EmptyState text="No tasks found... create one now" />
        }
      />
    </Wrapper>
  );
}

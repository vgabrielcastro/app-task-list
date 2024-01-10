import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Button, Title, Wrapper } from "./styles";

type TarefaType = {
  data: any;
  deleteItem: () => void;
};

export default function Tarefa({ data, deleteItem }: TarefaType) {
  return (
    <Wrapper>
      <Title>{data.item}</Title>
      <Button onPress={deleteItem}>
        <FontAwesome name="trash" size={20} color="#22272e" />
      </Button>
    </Wrapper>
  );
}

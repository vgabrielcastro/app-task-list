import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Image as ExpoImage } from 'expo-image'

export const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Image = styled(ExpoImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.title_secondary};
  max-width: ${Dimensions.get('screen').width / 1.5}px;
`;

import { FlatList, ImageBackground, View } from "react-native";
import styled from "styled-components/native";

export const ImageContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #caf;
  gap: 10px;
`;

export const CardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 200px;
  height: 50px;
  border-radius: 6px;
`;

export const CardTitle = styled.Text``;

export const CardSubTitle = styled.Text``;
import styled from "styled-components/native";
import { Platform } from "react-native";

export const PageContainer = styled.View` 
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: Platform;
  gap: 40px;
`;

export const PageTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const PageSubTitle = styled.Text`
  font-size: 16px;
`;

export const PageImage = styled.Image`
  width: 500px;
  height: 500px;
`;

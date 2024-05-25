import React from "react";
import { FlatList, ImageBackground, View } from "react-native";

import Img from '../../img/palmeiras-sem-fundo.png';
import * as S from './styles.js';

function CreativeCard(props) {
  return (
    <S.CardContainer>
      <S.CardTitle>{props.title}</S.CardTitle>
      <S.CardSubTitle>{props.descricao}</S.CardSubTitle>
    </S.CardContainer>
  );
}

export const CreativeComponent = React.FC = () => {
  return (
    <S.ImageContainer>
      <CreativeCard title='Título' descricao='Descrição'/>
    </S.ImageContainer>

  );
} 

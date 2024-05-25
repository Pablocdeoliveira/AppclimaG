import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import WeatherCard from './WeatherCard/weathercard.js';

import Calor from './WeatherCard/assets/imagem-clima/imagem-calor.png';
import Chuva from './WeatherCard/assets/imagem-clima/imagem-chuva.png';
import Frio from './WeatherCard/assets/imagem-clima/imagem-frio.png';
import Nublado from './WeatherCard/assets/imagem-clima/imagem-nublado.png';
import Tempestade from './WeatherCard/assets/imagem-clima/imagem-tempestade.png';

export default function Home() {
  const [stateTemperatura, setStateTemperatura] = useState();
  const [descricao, setDescricao] = useState("desc");
  const [cidade, setCidade] = useState("Cidade");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=9d7dda8c0f3471b54505c0a37583066e`;
  let Background;

  const callApi = () => {

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dadoTemperatura) => {
        setStateTemperatura(dadoTemperatura.main.temp);
        setDescricao(dadoTemperatura.weather[0].description);
        console.log(descricao);
      });
  };

  if (+stateTemperatura >= 25 && descricao == 'céu limpo') {
    Background = Calor;
  } else if (+stateTemperatura <= 25) {
    Background = Frio;
  }

  if (descricao == 'nublado' || descricao == 'algumas nuvens') {
    Background = Nublado;
  } else if (descricao == 'chuva') {
    Background = Chuva;
  } else if (descricao == 'tempestade') {
    Background = Tempestade;
  }

  const dadoEntrada = (evento) => {
    setCidade(evento.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={ Background } style={styles.background}>
        <Text style={styles.title}>Clima Geek</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o nome da cidade"
          onChange={dadoEntrada}
        />
        <Button title="Buscar" onPress={callApi} />
        {stateTemperatura !== null && (
          <WeatherCard
            temperature={stateTemperatura}
            description={descricao}
            city={cidade}
          />
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    width: '80%',
  },
});
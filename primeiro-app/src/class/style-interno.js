import { StyleSheet, Text, View, Image } from 'react-native';

export default function AppInterno() {
  return (
    <View style={uva.container}>
      <Image source={require('./assets/favicon.png')}/>
      <Text style={uva.title}>Hello World!</Text> 
    </View>
  );
}

const uva = StyleSheet.create({
  container: {
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#CFE1FA'
  },
  title: {
    paddingTop: 32, 
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
  }
});

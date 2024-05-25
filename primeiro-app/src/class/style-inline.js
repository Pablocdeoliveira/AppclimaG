import { Text, View, Image } from 'react-native';

export default function AppInline() {
  return (
    <View style={{ 
      display: 'flex', 
      flex: 1, 
      flexDirection: 'column',
       alignItems: 'center', 
       justifyContent: 'center',
       backgroundColor: '#CFE1FA'
      }}>
      <Image source={require('./assets/favicon.png')}/>
      
      <Text style={{
        paddingTop: 32, 
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white' 
      }}>
        Hello World!
      </Text> 

    </View>
  );
}


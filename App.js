import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Constants from 'expo-constants'

import Exemplo1 from './src/exemplos/ex01';
import Exemplo2 from './src/exemplos/ex02';
import Exemplo3 from './src/exemplos/ex03';
import Exemplo4 from './src/exemplos/ex04';
import Atividade4 from './src/exemplos/ex04/atv4';
export default function App() {
  return (
    <View style={styles.container}>
      <Atividade4/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:10,
    paddingTop: Constants.statusBarHeight,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Constants from 'expo-constants'

import Exemplo1 from './src/exemplos/ex01';
import Exemplo2 from './src/exemplos/ex02';
import Exemplo3 from './src/exemplos/ex03';
import Exemplo4 from './src/exemplos/ex04';

import Atividade4 from './src/exemplos/atv04';

import Index from './src/exemplos/ex05';


import { useState } from 'react';
export default function App() {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C51162',
    padding:8,
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 6,
    fontSize: 18,
    fontWeight: 'center',
    textAlign: 'center',
    color: '#C51162'
    
  }
});

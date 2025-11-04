import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Constants from 'expo-constants'

import Exemplo1 from './src/exemplos/ex01';
import Exemplo2 from './src/exemplos/ex02';
import Exemplo3 from './src/exemplos/ex03';
import Exemplo4 from './src/exemplos/ex04';
import Atividade4 from './src/exemplos/atv04';

import Exemplo8 from './src/exemplos/ex08';

import Index from './src/exemplos/ex06';


import { useState } from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 8</Text>
       <Text style={styles.cabecalho}>Lista de compras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#755313ff',
    padding:8,
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 6,
    fontSize: 10,
    fontWeight: 'center',
    textAlign: 'center',
    color: '#0d2163ff'
    
  },
  titulo: {
    fontSize: RFPercentage(3),
    color: 'deepskyblue',
    fontWeight:'bold',
    borderWidth: 2,
    borderBlockColor: 'deepskyblue',
    margintop: 10,
    marginBottom: 10,
    padding: 8,
    width: '100%',
    height:80,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
  },
  cabecalho:{
    backgroundColor:  'deepskyblue',
    width:'100%',
    padding: RFPercentage(2),
    alignItems:'center',
    color:'#fafafa',
    fontSize:RFValue(20),
    textAlign:'center',
  },
});

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import { useState } from 'react';

export default function Index() {

  const [massa, setMassa] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mensagem, setMensagem] = useState(0);
  function Calcular() {
    const valor = massa / (altura * altura);
    setResultado(valor);

    if ( valor<18.5){
      setMensagem('Abaixo do peso!');
    }
    else if ( valor>=18.5 && valor< 24.9){
      setMensagem('Peso normal!');
    }
    else if ( valor>=25 && valor< 29.9){
      setMensagem('Sobrepeso!');
    }
    else if ( valor>=30 && valor< 34.9){
      setMensagem('Obesidade grau 1 !');
    }
    else if ( valor>=35 && valor< 39.9){
      setMensagem('Obesidade grau 2!');
    }
    else 
    {
      setMensagem('Obesidade grau 3!');
    }
 }

  return (



    <View style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <View style={styles.entradaImc}>
        <TextInput
          placeholder='Massa'
          placeholderTextColor='lightgray'
          keyboardType='numeric'
          style={styles.input}
          onChangeText={(entrada) => setMassa(entrada)}
        />


        <TextInput
          placeholder='Altura'
          placeholderTextColor='lightgray'
          keyboardType='numeric'
          style={styles.input}
          onChangeText={(entrada) => setAltura(entrada)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => Calcular()} >
        <Text style={styles.buttonText}> Calcular </Text>
      </TouchableOpacity>
      <Text style={styles.resultados}> {resultado.toFixed(2)} </Text>
      <Text style={styles.mensagem}> {mensagem} </Text>


    </View>
  );

};




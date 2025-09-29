import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles  from './styles';

export default function atividade4() {
const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <View style={styles.container}>
     
      <Text style={styles.mensagem}>
        {nome || sobrenome ? ` Ola, ${nome} ${sobrenome}!` : "Digite seu nome abaixo:"}
      </Text>

      
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

     
      <TextInput
        style={styles.input}
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
    </View>
  );
}
   
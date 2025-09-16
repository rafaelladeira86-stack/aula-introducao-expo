import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles  from './styles';

export default function Exemplo4() {

    const[texto, settexto] = useState('');
    const[txt2, setTxT2] = useState('valor inicial ');


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo4 </Text>
            <Text style={styles.txt}>{texto}</Text> 
            <TextInput
            onChangeText={settexto}
            placeholder='texto de fundo'
            keyboardType='ascii-capable'
            //editable={false}
            //multiline
            //numberOfLines={4}
            maxLength={7}
            //secureTextEntry
            style={styles.input}
            />

            <Text style={styles.txt}>{txt2}</Text>
             <TextInput
               value={txt2}
               onChangeText={setTxT2}
               placeholder='digite sua mensagem'
               keyboardType='ascii-capable'
               style={styles.input}
            />

            <TouchableOpacity
            style={styles.botao}
            onPress={() => {}}
            >

            <Text style={styles.txtbotao}>Exibir texto</Text>
            
            </TouchableOpacity>
            
        
        </View>
    );
}

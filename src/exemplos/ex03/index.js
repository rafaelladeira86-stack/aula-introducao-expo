import{useState} from 'react';
import {View, Text, Button,TouchableOpacity } from 'react-native';

import styles  from './styles';

export default function Exemplo3() {


const[numero, setNumero] = useState(10);


function handleincrementar (){

    setNumero(numero + 1);
    
    
    //console.log(numero);
    
}



    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo3 </Text>
            <Button
            onPress={() => {alert('ALGUEM TOCOU NO BOTÃO')}}
            title="Alerta"
            color="#777"
            accessibilityLabel="Botão de alerta"
            />

            <Text style={styles.txt}>{numero}</Text>

            

            <TouchableOpacity 
            style={styles.botao}
            onPress={() => handleincrementar()}
            
            >
                
            <TouchableOpacity 
            style={styles.botao}
            onPress={() => handledecrementar()}
            
            ></TouchableOpacity>
            <Text style={styles.txtBotao}>INCREMENTAR NUMERO</Text>    
                
            </TouchableOpacity>    
        </View>
    );
}

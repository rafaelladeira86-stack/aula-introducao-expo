import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import uuid from 'react-native-uuid';

import ItemLista from './intemLista';

import styles from './styles';


export default function Exemplo8(){

 const [items, setitems] = useState([
    { id: uuid.v4(), text: 'Leite integral'},
    { id: uuid.v4(), text: 'Pão de forma'},
    { id: uuid.v4(), text: 'Nescal'},
    { id: uuid.v4(), text: 'Manteiga'},
 ]); // [] array ou lista de itens
  
 
 return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 8</Text>
       <Text style={styles.cabecalho}>Lista de compras</Text>
       <FlatList
       data={items}
       renderItem={({item}) =>
         <ItemLista>
            {item.text}
         </ItemLista>}

         style={styles.lista}
       />
    </View>
  );
}
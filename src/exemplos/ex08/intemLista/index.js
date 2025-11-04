import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from 'expo/vector-icons/MaterialIcons';

import styles from './styles';


export default function ItemLista({children}){


 
 return (
   <TouchableOpacity style={styles.container}>
    <Text style={styles.txtItem}> {children}</Text>
    <MaterialIcons name="delete-outline" size={26} color="#FF1493" />
   </TouchableOpacity>
  );
}
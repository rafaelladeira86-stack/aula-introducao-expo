import {View, Text } from 'react-native';

import styles  from './styles';

export default function Atividades01() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividades01 </Text>
            <Text style={styles.txt} >Introdução React Native com Expo</Text>
            <Text style={styles.txthoje} >aula de hoje </Text>
        </View>
    );
}
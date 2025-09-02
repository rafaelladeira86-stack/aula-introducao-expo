import {View, Text,} from 'react-native';

import styles  from './styles';


export  function Mensagem ({titulo, children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.texto}>{children}</Text>
        </View>
    );
}

export default Mensagem;
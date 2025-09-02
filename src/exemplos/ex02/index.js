import {View, Text, Image} from 'react-native';

import styles  from './styles';

import img from '../../../assets/002-1-react-native.png'

export  function Exemplo02() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>exemplo 2  </Text>
            <Image source={img} style={styles.Imagem} />
        </View>
    );
}

export default Exemplo02;
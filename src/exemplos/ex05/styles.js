import { StyleSheet } from "react-native";
import { RFPercentage, } from "react-native-responsive-fontsize";
const styles = StyleSheet.create(
    {
    txtSaida: {
        margin:6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#E91E63', 

    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#E91E63',
        height: 40,
        color:'#E53935',
        borderRadius: 10,
        marginTop: 10,
    },

    button: {
        backgroundColor: '#E91E63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    txtButton: {
        borderWidth: 4,
        borderColor: '#E91E63',
        fontSize: 22,
        color: '#FF80AB',
        textAlign:'center',
    },
    txtLabel: {
        fontSize:16,
        fontWeight: 'bold',
        color:'#fff'
    },
    }
);

export default styles;
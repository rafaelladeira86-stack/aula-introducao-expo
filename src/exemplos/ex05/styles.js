import { StyleSheet } from "react-native";
import { RFPercentage, } from "react-native-responsive-fontsize";
const styles = StyleSheet.create(
    {
    txtSaida: {
        margin:6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#1056daff', 

    },
    txtEntrada: {
        backgroundColor: '#fff',
        padding: 12,
        width:'100%',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 18,
        borderColor: '#ddd',
        height: 40,
        color:'#333',
        borderRadius: 12,
        marginTop: 10,
        marginVertical: 8,
        
    },

    button: {
        backgroundColor: '#14195eff',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    txtButton: {
        fontSize: 22,
        color: '#50f110ff',
        textAlign:'center',
    },
    txtLabel: {
        fontSize:16,
        fontWeight: 'bold',
        color:'#07204493'
    },
    
    
    paragraph: {
    margin: 6,
    fontSize: 18,
    fontWeight: 'center',
    textAlign: 'center',
    color: '#a8b818ff'
    
    },
    }
);

export default styles;
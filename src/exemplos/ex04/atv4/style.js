import { StyleSheet } from "react-native";
import { RFPercentage, } from "react-native-responsive-fontsize";
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#f666',
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            
        },

        titulo:{
            fontSize: RFPercentage(5),
            fontWeight:'bold',
            color:'#777',
        },
        txt:{
            fontSize:RFPercentage (2.5),

        },

        app:{
            fontSize:RFPercentage (3.0),

        },

        input:{
            borderWidth: RFPercentage(0.5),
            borderColor: 'darkslategrey',
            width:'80%',
            borderRadius: RFPercentage(1.5),
            padding: RFPercentage(1.5),
            fontSize: RFPercentage(2),
            textAlign: 'center',
        },

        botao:{
            
            backgroundColor: 'darkslategrey',
            width:'75%',
            borderRadius: RFPercentage(2),
            padding: RFPercentage(1),
            justifyContent:'center',
            alignItems: 'center',
            margin: RFPercentage(2),

    },

    txtbotao:{
        fontSize: RFPercentage(2),
        color:'#fafafa',
    },

}

);

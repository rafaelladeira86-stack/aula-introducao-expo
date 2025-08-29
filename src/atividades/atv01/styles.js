import { StyleSheet } from "react-native";
import { RFPercentage, } from "react-native-responsive-fontsize";
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#f67',
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            
        },

        titulo:{
            fontSize: RFPercentage(5),
            fontWeight:'bold',
            color:'#777',
            width:'100%',
            height:80,
            textAlign:'center',

        },
        txt:{
            fontSize:RFPercentage (2.5),
            

        },

        txthoje:{
            fontSize:RFPercentage (3.0),

        },

    }
);

export default styles;
import { StyleSheet } from "react-native";
import { RFPercentage, } from "react-native-responsive-fontsize";
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#ff0',
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

    }
);

export default styles;
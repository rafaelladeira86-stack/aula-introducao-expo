import { ImageComponent, StyleSheet } from "react-native";
import { RFPercentage, } from "react-native-responsive-fontsize";
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#f3f',
            padding:8,
            alignItems:'center',
            borderRadius:20,
            marginBottom:RFPercentage(1),
            borderWidth:RFPercentage(0.6),
            width:'90%',



            
        },

        titulo:{
            fontSize: RFPercentage(3),
            fontWeight:'bold',
            color:'#777',
            marginBottom: RFPercentage(1),
        
            },


       texto :{

        fontSize:RFPercentage(2.2),
        color: '#fafafa',
       },

      

    });

    export default styles;
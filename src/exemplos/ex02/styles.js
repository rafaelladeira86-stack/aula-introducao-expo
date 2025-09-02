import { ImageComponent, StyleSheet } from "react-native";
import { RFPercentage, } from "react-native-responsive-fontsize";
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#f3f',
            padding:8,
            flex:1,
            alignItems:'center',
            borderRadius:20,
            
        },

        titulo:{
            fontSize: RFPercentage(5),
            fontWeight:'bold',
            color:'#777',
            borderWidth:2,
            borderColor: 'deepskyblue',
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            width:'100%',
            height: 80,
            textAlign:'center',
            textAlignVertical: 'center',
            borderRadius: 20,
        },


       Imagem :{

        //height: rfporcentage(10),
        //width:rfporcentage(28),
        width: '80%',
        resizeMode: 'contain',
        },

      

    });

    export default styles;
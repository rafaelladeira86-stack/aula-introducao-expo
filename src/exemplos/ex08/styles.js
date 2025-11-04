import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#755313ff',
    padding:8,
    paddingTop: Constants.statusBarHeight,
  },
  cabecalho:{
    backgroundColor:  'deepskyblue',
    width:'100%',
    padding: RFPercentage(2),
    alignItems:'center',
    color:'#fafafa',
    fontSize:RFValue(20),
    textAlign:'center',
  },
 
  titulo: {
    fontSize: RFPercentage(3),
    color: 'deepskyblue',
    fontWeight:'bold',
    borderWidth: 2,
    borderBlockColor: 'deepskyblue',
    margintop: 10,
    marginBottom: 10,
    padding: 8,
    width: '100%',
    height:80,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
  },
  txtItem: {
    fontSize: RFValue(16),
  },
  lista:{
    marginTop:RFValue(10),
    width: '100',
  },
 
});

export default styles;
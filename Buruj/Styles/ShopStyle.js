import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
      
    gridView: {
      marginTop: 0,
      flex: 1,
      backgroundColor: '#F3F2F8',
    },
  
    itemContainer: {
      justifyContent: 'flex-end',
      marginTop:10,
      borderRadius: 5,
      height:285,
      borderWidth: 1, 
      borderRadius:0,
      borderColor: 'lightgrey',
    },
  
    itemName: {
      fontSize: 16,
      color:'grey',
      fontWeight:'bold',
      marginLeft:8,
      marginTop:10,
    },
  
    itemPrice: {
      fontWeight: '600',
      fontSize: 12,
      color: 'black',
      marginBottom: 10,
      marginLeft:8
    },
  
    BuyButton:{
      width :"101%",
      height:"18.5%",
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      borderWidth: 1, 
      borderColor: 'lightgrey', 
      backgroundColor:'#45105E',
      marginTop:4,
    },
  
    BuyButtonText: {
      marginTop: 20,
      color: "white",
      fontSize: 16,
      marginBottom:20,
    },
  });

  export default styles;
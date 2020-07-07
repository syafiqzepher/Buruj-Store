import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
    containerImage: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    
    gridView: {
      marginTop: 0,
      flex: 1,
      backgroundColor: '#F3F2F8',
    },
    
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    
    productList: {
      paddingHorizontal: 8,
      paddingVertical: 16,
    },
    
    titleText: {
      marginTop: 20,
      color: 'black',
      fontSize: 22,
      fontWeight: "bold",
      alignSelf: 'center',
      textAlign: "center",
      color:'#404040',
      
    },
  
    titleDesc: {
      marginBottom: 20,   
    },
    
    button: {
      marginTop: 10,
      marginLeft:5,
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 40,
      height:40,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
  
    countText: {
      color: '#404040',
      fontSize: 18,
      fontWeight: "bold",
      marginTop:10,
    },
  
    mainFlex:{
      marginTop: 5,
      marginBottom:20,
      flexDirection: 'row',
  
    },
  
    countFlex:{
      width: 50,
    },
    
    itemName: {
      fontSize: 16,
      color: 'black',
      fontWeight: '600',
    },
  
    itemPrice: {
      fontWeight: '600',
      fontSize: 12,
      color: 'black',
    },
  });

    export default styles;
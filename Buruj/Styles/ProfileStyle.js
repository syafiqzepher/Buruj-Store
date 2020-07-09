import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    header:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '8.5%',
        backgroundColor: '#141414',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }, 
    headerContainer:{
        alignItems: 'center',
        backgroundColor: '#141414',
        height: 90,
        marginBottom: 70,
        width:370,
    },
    imageContainer:{
        marginTop: 30
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        margin: 3,
        width: 250
    },
    buttonContainer: {
        marginTop:15,
        margin: 3,
        width: 250
        
    },
    TouchAble:{
        width :"50%",
        height:"8%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        margin: 5,
        color: "#404040",
        fontSize: 22,
      },
    headertext:{
        color: '#ffdc00',
        textAlign: "center",
        fontWeight: 'bold',
        fontSize:20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#45105E',
        padding: 7,
        width: '60%',
        borderRadius: 3
      },
    buttonSignOut: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        backgroundColor: 'grey',
        padding: 7,
        width: '40%',
        borderRadius: 3
      },
      textContainer: {
        marginHorizontal: 60,
        marginTop: 5,
        justifyContent:'center',
        width:'70%'
      },
      titleNew: {
        marginTop: 10,
        color: '#bdc3c7',
        fontSize: 10
      }
  });

  export default styles;
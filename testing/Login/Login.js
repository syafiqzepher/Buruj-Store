import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Image, StatusBar,TouchableOpacity,Alert} from 'react-native';
import * as firebase from "firebase";
import CustomAlert from './Component/CustomAlert';
var config = {
  apiKey: "AIzaSyCiAsuQPypR3tWc2obl50Vt_F0dwaV7HvM",
  authDomain: "fir-tutorial-9806f.firebaseapp.com",
  databaseURL: "https://fir-tutorial-9806f.firebaseio.com",
  projectId: "fir-tutorial-9806f",
  storageBucket: "fir-tutorial-9806f.appspot.com",
  messagingSenderId: "768851322468",
  appId: "1:768851322468:web:06c2bbff6801975396a171",
  measurementId: "G-12XJK45FEH"
};
firebase.initializeApp(config);

export default class App extends Component {

  //Change Header 
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.onPressAlertNegativeButton = this.onPressAlertNegativeButton.bind(this);
    this.state = {
      email: "",
      password: "",
      condInval: false, //Alert for invalid
      status: true, //status either error or successful sign up
    };
  }
  

  onPressAlertNegativeButton = () => {
    this.setState({condInval: false ,},
      );
      }
  
   Login = () => {
    try {
     if(this.state.email && this.state.password){
      firebase
         .auth()
         .signInWithEmailAndPassword(this.state.email, this.state.password)
         .then(() => {
          this.props.navigation.navigate('Home'); //Successfully Login
          })
         .catch(error => {
           this.setState({condInval: true},);
          });
     } else {
        this.setState({condInval: true},);
     }
      } catch (error) {
        console.log(error.toString(error));
    }
  };

  render(){
    return(
      <View style={styles.screen}>
      <StatusBar backgroundColor = "white" barStyle = "dark-content"/>
      <Image source={require('./images/boy.png')}
             style={{width: 100, height: 100, margin: 25}} />
      <Text style={styles.textTitle}>Login</Text>
      <View style = {styles.inputContainer}>
      <TextInput
        placeholder='Email'
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={email => this.setState({ email })}
      />

      <TextInput
        placeholder='Password'
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={password => this.setState({ password })}
      />
      </View>

      <View style = {styles.buttonContainer}>
      <Button color="#65a171"
       onPress={() => this.Login(this.state.email, this.state.password)}
       title='LOG IN'/>
      </View>


        {/* If user key in wrong username or password */}
        <CustomAlert
          displayAlert={this.state.condInval}
          //displayAlertIcon={true} //untuk show icon
          alertTitleText={' '}
          alertMessageText={'Invalid Username or Password'}
          displayPositiveButton={true}
          positiveButtonText={'OK'}
          onPressPositiveButton={this.onPressAlertNegativeButton}
        />

      <TouchableOpacity style={styles.TouchAble} onPress={() => this.props.navigation.navigate('SignUp')} >
        <Text style={styles.textGuest}> Sign Up Here </Text>
      </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
      marginTop: 10,
      marginBottom: 10
  },
  buttonContainer: {
      margin: 3,
      width: 250
  },
  input: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      margin: 3,
      width: 250
  },
  textTitle: {
    margin: 5,
    color: "#404040",
    fontSize: 22,
  },
  textGuest: {
      marginTop: 20,
      color: "lightgrey",
      fontSize: 16,
  },
  TouchAble:{
    width :"50%",
    height:"8%",
    justifyContent: 'center',
    alignItems: 'center',
  }
});
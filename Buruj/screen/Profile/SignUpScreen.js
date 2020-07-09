import React, {useEffect, useState} from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
  Alert,
  TextInput,
} from "react-native";
import * as firebase from "firebase";
import {app} from '../../CRUD/fbconfig';
import styles from '../../Styles/ProfileStyle';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] =useState('');
  const [username, setUsername] = useState('');
  const update = {
    displayName: username,
   
  };
  const signupButton =() => {
    try {
      if(email && pass){
       firebase
           .auth()
           .createUserWithEmailAndPassword(email,pass)
           .then(user => { 
                  firebase.auth().currentUser.updateProfile(update);
                  console.log(user);
                  navigation.navigate('Login');
                  Alert.alert( 'User account registered' );
                  
                  //this.setState({condSucc: true},); //Successfully sign up
            })
           .catch(error => {
            //Alert.alert('Status',error.toString(error)); //Checking if username already existed
            //Alert.alert({ 'errorMessage:' error.message });
            console.log(error)
            Alert.alert( '' + error);
            //this.setState({condInvalExist: true, error:error.message},);
           });
      } else {
        Alert.alert('Invalid email and password');
         //this.setState({condInval: true},); //Invalid email and password
        }
       } catch (error) {
         //Alert.alert({ errorMessage: error.message });
       }



  };

    return (
      
      <View style={styles.container} >
        <Image source={require('../../images/signup.png')}
             style={{width: 100, height: 100, margin: 25}} />
        <Text style={styles.textTitle}>Sign Up </Text>

          <TextInput
          placeholder="username"
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(nextValue) => setUsername(nextValue)}
          style={styles.input}
          />

          <TextInput
          placeholder="email"
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(nextValue) => setEmail(nextValue)}
          style={styles.input}
          />

          <TextInput
          placeholder="password"
          value={pass}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(nextValue) => setPass(nextValue)}
          style={styles.input}
          />

          


        <View style = {styles.buttonContainer}>
          <Button color="#45105E"
          onPress={signupButton}
          title='SIGN UP'/>
        </View>

        <TouchableOpacity style={styles.TouchAble} 
        onPress={() => {navigation.navigate('Login')}} 
        >
          <Text style={styles.textGuest}> Back to Login </Text>
        </TouchableOpacity>
      </View>
    );
  };

export default SignUpScreen;
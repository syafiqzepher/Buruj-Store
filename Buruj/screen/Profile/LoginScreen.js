import React, {useEffect, useState} from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
  TextInput,
  Alert,
} from "react-native";
import * as firebase from "firebase";
import {app} from '../../CRUD/fbconfig';
import styles from '../../Styles/ProfileStyle';
//import {Icon, Button} from 'react-native-elements';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] =useState('');
  const [CurrentUser,setCurrentUser] =useState('1');
  
  const LoginButton = () => {

    console.log(email , pass)
    try {
      if(email && pass){
      firebase
          .auth()
          .signInWithEmailAndPassword(email, pass)
          .then(() => {
          navigation.navigate('Profile', {currentUser : CurrentUser}); //Successfully Login
          setCurrentUser ( firebase.auth().currentUser.email)

          })
          .catch(error => {
            Alert.alert(
              'invalid password'
           )
            //this.setState({condInval: true},);
          });
      } else {
        Alert.alert(
          'Invalid email'
       )
        //this.setState({condInval: true},);
      }
      } catch (error) {
        console.log(error.toString(error));
    }
    
  }
    return (
      
      <View style={styles.container} >
        

        <Image source={require('../../images/boy.png')}
             style={{width: 128, height: 128}} />
        <Text style={styles.textTitle}> Login </Text>

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
          //onPress={()=>{navigation.navigate('Profile')}}
          onPress={LoginButton}
          title='LOGIN'/>
        </View>

        <TouchableOpacity style={styles.TouchAble} 
        onPress={() => {navigation.navigate('SignUp')}} 
        >
          <Text style={styles.textGuest}> Click here to signup </Text>
        </TouchableOpacity>
      </View>
    );
  };

export default LoginScreen;
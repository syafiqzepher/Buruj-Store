import React, {useEffect, useState} from 'react';
import { 
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Button,
  Alert,
  TextInput,
} from "react-native";
import * as firebase from "firebase";
import styles from '../../Styles/ProfileStyle';
import { BaseRouter } from '@react-navigation/core';

const ProductList = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] =useState('');
  const [User,setUser] =useState('0');
  const [count,setCount] = useState('0');
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);


  
const SignOut = () => {
    firebase
        .auth()
        .signOut()
        .then(function() {
          console.log(firebase.auth().currentUser)

          //To update State ( Force Refresh Screen)
          if(count != count){
            setCount ( (Math.random() * ((100 - 1) + 1)) + 1);
          }
          else{
            setCount(count + 1)
          }

          Alert.alert(
            "",
            "Sign out success !",
            [
              { text: "OK", onPress: () =>  console.log("Sign Out Success!") }
            ],
          );
         
          
         })
        .catch(function(error) {
          console.log(error)
          Alert.alert('Status', error.toString(error));
        });
  }  
  
  if(!firebase.auth().currentUser){
    return (

      <View style={styles.container} >
        {console.log(firebase.auth().currentUser)}
        <ScrollView>
          <View style={{justifyContent:'center'}}>
            <View style={styles.headerContainer}>
              <View style={styles.imageContainer}>
                <Image source={require('../../images/boy.png')}
                  style={{width: 128, height: 128}} />
              </View>
            </View>
    <Text style={{textAlign:'center', fontWeight: 'bold' ,fontSize: 24, marginTop: 12,}}>Guest Mode</Text>
            <View style={{alignItems:'center'}}>
            <View style = {styles.buttonContainer}>
          <Button color="#45105E"
          onPress={()=>{navigation.navigate('Login')}}
          //onPress={LoginButton}
          title='LOGIN'/>
        </View>  
            </View>
            
          </View>
        </ScrollView>
      </View>
    );
  }else{
  return(
    <View style={styles.container} >
        <ScrollView>
          {console.log(firebase.auth().currentUser)}
          <View style={{justifyContent:'center'}}>
            <View style={styles.headerContainer}>
              <View style={styles.imageContainer}>
                <Image source={require('../../images/boy.png')}
                  style={{width: 128, height: 128}} />
              </View>
            </View>
            <Text style={{textAlign:'center', fontWeight: 'bold' ,fontSize: 24, marginTop: 12,}}>{firebase.auth().currentUser.displayName}</Text>
            <View style={{alignItems:'center'}}>

            {//Update New Password 
            }
          <View style={styles.textContainer}>

          <Text style={styles.titleNew}> YOUR CURRENT PASSWORD</Text>  
          <TextInput
          placeholder=" "
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(nextValue) => setUsername(nextValue)}
          style={styles.input}
          />

          <Text style={styles.titleNew}> YOUR NEW PASSWORD</Text>  
          <TextInput
          placeholder=""
          value={pass}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(nextValue) => setPass(nextValue)}
          style={styles.input}
          />

          <View style={{alignItems:'center'}}>
              <TouchableOpacity 
              style={styles.button}
              //onPress={this.update}
              >
                <Text style={{color:'white', fontWeight:'bold'}}>UPDATE</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.buttonSignOut}
              onPress={SignOut}
              >
                <Text style={{color:'white', fontWeight:'bold'}}>SIGN OUT</Text>
              </TouchableOpacity>
              </View>
          </View>
 
            </View>
            
          </View>
        </ScrollView>
      </View>
  )
  }

  
  };

export default ProductList;
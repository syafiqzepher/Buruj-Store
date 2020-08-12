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
  Linking,
} from "react-native";
import * as firebase from "firebase";
import styles from '../../Styles/ProfileStyle';
import {changePassword} from '../../CRUD/CRUD';

const ProfileScreen = ({navigation}) => {
  const [currPass, setCurrPass] = useState('');
  const [newPass, setNewPass] =useState('');
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
  
  const UpdatePass = () =>{
    if(currPass){
      if(newPass){
        changePassword(currPass,newPass);
      }
      else{
        Alert.alert(
          "",
          "Nothing to update",
          [
            { text: "OK", onPress: () =>  console.log("Nothing updated") }
          ],
        );
      } 
    }
    else{
      Alert.alert(
        "",
        "Password Changed",
        [
          { text: "OK", onPress: () =>  console.log("Password Changed") }
        ],
      );
    }
  }

  const onInputLabelPressedCurr = () => {
    setHidden1(!hidden1);
  }
const onInputLabelPressedNew = () => {
    setHidden2(!hidden2);
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
    <Text style={{textAlign:'center', fontWeight: 'bold' ,fontSize: 24, marginTop: 12}}>Guest Mode</Text>
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
    if(firebase.auth().currentUser.email == 'admin@gmail.com'){
      return(
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
        <Text style={{textAlign:'center', fontWeight: 'bold' ,fontSize: 24, marginTop: 12}}>Admin Mode</Text>
            <View style={{alignItems:'center'}}>
            <View style = {styles.buttonContainer}>
            <Button color="#45105E"
              //onPress={()=>{navigation.navigate('Login')}}
              //onPress={LoginButton}
              title='Customer Order'/>
              <View style={{alignItems:'center' , width:'100%'}}>
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
      </View>)
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

                {/* Tracking and Transaction History*/}
                <View style={{flex:1,flexDirection:'row',marginBottom:20,marginTop:10}}> 
                {/* backgroundColor:'#FA6400' */}
                <TouchableOpacity style ={{backgroundColor:'#16a085', width:'40%',height:'200%', justifyContent:'center',alignItems:'center',marginRight:10}}
                 onPress={() => {
                  //on clicking we are going to open the URL using Linking
                  Linking.openURL('https://www.tracking.my/poslaju');
                }} >
                      <Text style={{color:'white',fontSize:15, fontWeight:'bold'}} >Track My Parcel</Text>
                    </TouchableOpacity>
      
                    <TouchableOpacity style ={{backgroundColor:'#16a085', width:'40%',height:'200%', justifyContent:'center',alignItems:'center'}}
                    onPress={()=>{navigation.navigate('History')}}>
                      <Text style={{color:'white',fontSize:15, fontWeight:'bold'}} >Purchase History</Text>
                    </TouchableOpacity>
                </View>

                {/*Update New Password */}
              <View style={styles.textContainer}>
              <Text style={styles.titleNew}> YOUR CURRENT PASSWORD</Text>  
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              
              <TextInput
              placeholder=" "
              value={currPass}
              secureTextEntry={hidden1}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(nextValue) => setCurrPass(nextValue)}
              style={styles.input}
              />
              <TouchableOpacity onPress={onInputLabelPressedCurr} style={{ marginLeft: -70, width:'20%'}}>
              <Text style={{textAlign:'right', fontSize:12, color: '#909497'}}>
                    {hidden1 ? 'Show' : 'Hide'}
              </Text>
              </TouchableOpacity>
              </View>
              
              <Text style={styles.titleNew}> YOUR NEW PASSWORD</Text>  
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
              placeholder=" "
              value={newPass}
              secureTextEntry={hidden2}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(nextValue) => setNewPass(nextValue)}
              style={styles.input}
              />
              <TouchableOpacity onPress={onInputLabelPressedNew} style={{marginLeft: -70, width:'20%'}}>
              <Text style={{textAlign:'right', fontSize:12, color: '#909497'}}>
                    {hidden2 ? 'Show' : 'Hide'}
              </Text>
              </TouchableOpacity>
              </View>
    
              
              </View>
              <View style={{alignItems:'center' , width:'70%'}}>
                  <TouchableOpacity 
                  style={styles.button}
                  onPress={UpdatePass}
                  >
                    <Text style={{color:'white', fontWeight:'bold'}}>UPDATE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style={styles.buttonSignOut}
                  onPress={SignOut}
                  >
                    <Text style={{color:'white', fontWeight:'bold',}}>SIGN OUT</Text>
                  </TouchableOpacity>
                  </View>
                  
                </View>
                
              </View>
            </ScrollView>
          </View>
      )
    }
  
  
  }
  };

    

  

  

export default ProfileScreen;
import React, {useEffect, useState} from 'react';
import { 
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  Linking,
} from "react-native";
import database from '@react-native-firebase/database';
import * as firebase from "firebase";

const OrderScreen = ({route,navigation}) => {
 
  const [cartItem,setCartitem]= useState();
  const [custName, setCustName] = useState('');
  const [custContact, setCustContact] =useState('');
  const [custAddress, setCustAddress] =useState('');
  const [referenceId, setReferenceId] =useState('');


  const SubmitOrder = () =>{
      firebase.database().ref('PurchaseHistory/' + firebase.auth().currentUser.displayName)
      .push({
        custName: custName,
        custContact: custContact,
        custAddress: custAddress,
        referenceId: referenceId,
      }).then((data) => {
        console.log('order has been submitted')
        
      }).catch((error) => {
        console.log('error', error)
      })
     ,Alert.alert(
      '',
      'Your Order has been submitted',
      [
        {text: 'OK', onPress: () => 
         { 
            navigation.navigate('Home');
        }
        }
      ],
      { cancelable: false }
    );
  }


  return (
    <ScrollView>
    <View style={styles.screen}>
      <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
      <View>
      <Text style={{fontWeight: 'bold', fontSize: 35, textAlign: 'center', marginTop: 10, marginBottom: 30,}}>ORDER FORM</Text>
      </View>

          <View>
          <Text style={{fontSize: 15, marginLeft: 15, marginBottom: 15, fontWeight: 'bold'}}>Customer's Details:</Text>
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "  Type your name here..."
             placeholderTextColor = "grey"
             onChangeText={(nextValue) => setCustName(nextValue)}
             autoCapitalize = "none"/>
          
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "  Type your contact number here..."
             placeholderTextColor = "grey"
             onChangeText={(nextValue) => setCustContact(nextValue)}
             autoCapitalize = "none"/>

          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "  Type your address here..."
             placeholderTextColor = "grey"
             onChangeText={(nextValue) => setCustAddress(nextValue)}
             autoCapitalize = "none"/>
          </View>

          <View style={{borderBottomColor: '#cacfd2', borderBottomWidth: 1, width: "92%", marginHorizontal: 15, marginVertical: 25}}></View>

          <Text style={{fontSize: 15, marginLeft: 15, marginBottom: 15, fontWeight: 'bold'}}>Select Payment Method:</Text>

          <View style={styles.groupLogo}>
          <Image
          source={require('../../images/maybank.png')}
          style={styles.iconLogo}/>
          <View>
          <Text style={{marginLeft: 15, fontStyle: 'italic'}}>
              Account Number: 1234567{"\n"}
              Name: Nik Faiz
            </Text>
          <TouchableOpacity 
            style = {styles.bankButton}
            onPress={() => {
              //on clicking we are going to open the URL using Linking
              Linking.openURL('https://www.maybank2u.com.my/home/m2u/common/login.do');
            }}>
              <Text style = {styles.submitButtonText}> Click here to open Maybank2U</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.groupLogo}>
          <Image
          source={require('../../images/cimb.png')}
          style={styles.iconLogo}/>
          <View>
            <Text style={{marginLeft: 15, fontStyle: 'italic'}}>
              Account Number: 1234567{"\n"}
              Name: Nik Faiz
            </Text>
          <TouchableOpacity 
            style = {styles.bankButton}
            onPress={() => {
              //on clicking we are going to open the URL using Linking
              Linking.openURL('https://www.cimbclicks.com.my/clicks/#/');
            }}>
              <Text style = {styles.submitButtonText}>Click here to open CIMB Click</Text>
            </TouchableOpacity>
            </View>
          </View>
            
          <View style={{borderBottomColor: '#cacfd2', borderBottomWidth: 1, width: "92%", marginHorizontal: 15, marginVertical: 25}}></View>

            <Text style={{fontSize: 15, marginLeft: 15, marginBottom: 15, fontWeight: 'bold'}}>Payment Details:</Text>

            <Text style={{fontSize: 15, marginLeft: 15, fontStyle: 'italic'}}>Please pay on your online banking and insert the Reference ID on below, thankyou!</Text>
            <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "  Type your reference ID here..."
             placeholderTextColor = "grey"
             onChangeText={(nextValue) => setReferenceId(nextValue)}
             autoCapitalize = "none"/>

            <View style={{alignItems: 'center'}}>
            <TouchableOpacity
             style={styles.submitButton}
            onPress = {SubmitOrder}
             >
             <Text style = {styles.submitButtonText}> Submit Order </Text>
          </TouchableOpacity>
          </View>

      </View>
    </ScrollView>
  );
  
  };

    
  const styles = StyleSheet.create({
    screen: {
      justifyContent: 'center',
    },
    input: {
      margin: 15,
      marginVertical: 5,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
   },
   bankButton: {
      backgroundColor: '#16a085',
      padding: 10,
      marginLeft: 15,
      height: 40,
   },
   submitButton: {
    backgroundColor: '#45105E',
    padding: 10,
    marginVertical: 10,
    width: "30%",
  },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   },
   iconLogo: {
    width: 75,
    height: 75,
    resizeMode: 'center',
    marginLeft: 15,
  },
  groupLogo: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15
  },
  });
  
  

  

export default OrderScreen;
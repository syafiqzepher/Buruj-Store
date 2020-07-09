
import * as firebase from "firebase";
import { 
   
    Alert,
  } from "react-native";
// import {app} from '../../CRUD/fbconfig';

export const signUp = async (email,pass, update) => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,pass)
    .then(user => { 
        firebase.auth().currentUser.updateProfile(update);
        
        console.log(user);

        Alert.alert( 'User account registered' );
        return true;
        
        //this.setState({condSucc: true},); //Successfully sign up
    })
    .catch(error => {
    //Alert.alert('Status',error.toString(error)); //Checking if username already existed
    //Alert.alert({ 'errorMessage:' error.message });
    
        console.log(error)
        Alert.alert( '' + error);

    //this.setState({condInvalExist: true, error:error.message},);
    });
}

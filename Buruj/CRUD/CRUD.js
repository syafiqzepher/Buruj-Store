import React, {Component} from 'react';
import {app} from './fbconfig';
import * as firebase from "firebase";
import { Alert } from 'react-native';


export const addLink = (qrvalue)=>{
    if(!firebase.auth().currentUser){
        Alert.alert('Login to Save')
    }
    else{
        let newPostKey = app.database().ref().child('item').push().key;
        let updates = {};
        updates['/item/' + newPostKey] = {Link:qrvalue,User:firebase.auth().currentUser.email}
        app.database().ref().update(updates);
        console.log(updates)
    }
    
}

export const deleteLink = (id) =>{
    app.database().ref('/item').child(id).remove();
}

export const reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
        user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
}

export const changePassword = (currentPassword, newPassword) => {
    
    reauthenticate(currentPassword).then(() => {
        var user = firebase.auth().currentUser;
        user.updatePassword(newPassword).then(() => {
            console.log("Password updated!");
            Alert.alert(
                'Status',
                'Password Updated!',
                [
                    {text:'OK',style:'cancel'}
                ]
            )
            console.log(firebase.auth().currentUser.email);
        }).catch(error => { console.log('E1:' + error.message) });
    }).catch(function(error){
        Alert.alert(
            'Status',
            error.message,
            [
                {text:'OK',style:'cancel'}
            ]
        )
        console.log('E2:' + error.message);
        });
    
    
  }
  
// export const changeEmail = (currentPassword, newEmail) => {
//     reauthenticate(currentPassword).then(() => {
//       var user = firebase.auth().currentUser;
//       user.updateEmail(newEmail).then(() => {
//         console.log("Email updated!");
//         console.log(firebase.auth().currentUser.email);
//       }).catch((error) => { console.log('E1 :'+error); });
//     }).catch((error) => { console.log('E2 :'+ error); });
//   }

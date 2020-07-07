import React, {useEffect, useState} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
      
      <View style={styles.container} >
        <Text>Home Screen</Text>
        <Text></Text>
        <Button title="Home 2" onPress={() => {navigation.navigate('Home2')}}/>
        <Text></Text>
        <Button title="Home 3"onPress={() => {navigation.navigate('Home3')}}/>
      </View>
    );
  };
 

export default HomeScreen;
const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }, 

  });
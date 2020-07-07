import React, {useEffect, useState} from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
      
      <View style={styles.container} >
        <Text>Home Screen 3</Text>
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
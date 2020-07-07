import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './Login';
import SignUpScreen from './SignUp';
import HomeScreen from './Home';

const MainStack = createStackNavigator({

Login : LoginScreen,
SignUp : SignUpScreen,
Home: HomeScreen,

},
{
    initialRouteName :'Login',
}
);

export default createAppContainer(MainStack);
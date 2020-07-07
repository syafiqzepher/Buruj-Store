
import * as React from 'react';
import { View,StyleSheet} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon, Button} from 'react-native-elements';

import Home from './Home';
import Home2 from './Home3';
import Home3 from './Home3';
import first from './First';
import second from './Second';


const HomeNav = createStackNavigator();
const HomeNavigator = () => (
    <HomeNav.Navigator initialRouteName="Home">
      <HomeNav.Screen name="Home" component={Home}/>
      <HomeNav.Screen name="Home2" component={Home2}/>
      <HomeNav.Screen name="Home3"component={Home3} />
    </HomeNav.Navigator>
);
const Tab = createBottomTabNavigator();
function HomeTab(){
    return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="First" component={first} />
      <Tab.Screen name="Second" component={second} />
    </Tab.Navigator>
    );
}

const RootStack = createStackNavigator();
export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeNavigator}  />
          <Tab.Screen name="First" component= {first}  />
          <Tab.Screen name="Second"  component={second}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

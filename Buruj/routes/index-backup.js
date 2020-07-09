import * as React from 'react';
import { View,StyleSheet} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Home Screen
import HomeScreen from '../screen/Home/HomeScreen';
import NewsScreen from '../screen/Home/Content/News';
import News2Screen from '../screen/Home/Content/News2';
import News3Screen from '../screen/Home/Content/News3';
//Shop Screen
import ShopList from '../screen/Shop/ShopScreen';
import Detail from '../screen/Shop/Productinfo';
import Cart from '../screen/Cart/CartScreen';
//Tutorial Screen
import tutorial from '../screen/Tutorial/tutorial';
import tutorial2 from '../screen/Tutorial/tutorial2';
import tutorial3 from '../screen/Tutorial/tutorial3';
import tutorial4 from '../screen/Tutorial/tutorial4';
import tutorial5 from '../screen/Tutorial/tutorial5';
import tutorial6 from '../screen/Tutorial/tutorial6';
import tutorial7 from '../screen/Tutorial/tutorial7';
import tutorial8 from '../screen/Tutorial/tutorial8';
//Profile Screen
import Login from '../screen/Profile/LoginScreen';
import SignUp from '../screen/Profile/SignUpScreen';
import Profile from '../screen/Profile/ProfileScreen';


import {Icon, Button} from 'react-native-elements';

//Home Screen
const HomeNav = createStackNavigator();
const HomeNavigator = () => (
    <HomeNav.Navigator initialRouteName="HomeScreen">
      <HomeNav.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
        
      />
      <HomeNav.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <HomeNav.Screen
        name="News2Screen"
        component={News2Screen}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <HomeNav.Screen
        name="News3Screen"
        component={News3Screen}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <HomeNav.Screen
        
        name="Cart"
        component={Cart}
        options={{
          headerStyle: {
              backgroundColor: '#141414',
              elevation: 0,
              shadowOpacity: 0
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
          }
        }}
      />
    </HomeNav.Navigator>
);


//Shop Screen 
const ShopNav = createStackNavigator();
const ShopNavigator = () => (
    <ShopNav.Navigator initialRouteName="ShopList">
      <ShopNav.Screen
        name="Shop"
        component={ShopList}

        options={({ navigation }) => ({
          title: 'Shop',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <ShopNav.Screen
        
        name="Detail"
        component={Detail}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <ShopNav.Screen
        
        name="Cart"
        component={Cart}
        options={{
          //headerRight:() => ( <ShoppingCartIcon/> ),
          headerStyle: {
              backgroundColor: '#141414',
              elevation: 0,
              shadowOpacity: 0
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
          }
        }}
      />
    </ShopNav.Navigator>
  
);

//Tutorial Screen
const TutorialNav = createStackNavigator();
const TutorialNavigator = () => (
    <TutorialNav.Navigator initialRouteName="Tutorial">
      <TutorialNav.Screen
        name="Tutorial"
        component={tutorial}
        options={({ navigation }) => ({
          title: 'Tutorial',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <TutorialNav.Screen
        name="Tutorial2"
        component={tutorial2}
        options={({ navigation }) => ({
          title: 'Tutorial',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <TutorialNav.Screen
        name="Tutorial3"
        component={tutorial3}
        options={({ navigation }) => ({
          title: 'Tutorial',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <TutorialNav.Screen
        name="Tutorial4"
        component={tutorial4}
        options={({ navigation }) => ({
          title: 'Tutorial',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <TutorialNav.Screen
        name="Tutorial5"
        component={tutorial5}
        options={({ navigation }) => ({
          title: 'Tutorial',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <TutorialNav.Screen
        name="Tutorial6"
        component={tutorial6}
        options={({ navigation }) => ({
          title: 'Tutorial',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <TutorialNav.Screen
        name="Tutorial7"
        component={tutorial7}
        options={({ navigation }) => ({
          title: 'Tutorial',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <TutorialNav.Screen
        name="Tutorial8"
        component={tutorial8}
        options={({ navigation }) => ({
          title: 'Tutorial',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <TutorialNav.Screen
        
        name="Cart"
        component={Cart}
        options={{
          //headerRight:() => ( <ShoppingCartIcon/> ),
          headerStyle: {
              backgroundColor: '#141414',
              elevation: 0,
              shadowOpacity: 0
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
          }
        }}
      />
    </TutorialNav.Navigator>
);

//Profile SCreen
const ProfileNav = createStackNavigator();
const ProfileNavigator = () => (
    <ProfileNav.Navigator initialRouteName="Profile">
      <ProfileNav.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#141414',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#EBF2FA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
              fontWeight: 'normal',
          },
          headerRight: () => (
            <Button
              icon={<Icon name='shopping-cart' color='#ffffff' />}
              buttonStyle={{backgroundColor:'#141414'}}
              onPress={() => navigation.navigate('Cart')}
              title=""
              color="#fff"
            />
          ),
        })}
      />
      <ProfileNav.Screen
        
        name="Login"
        component={Login}
        options={{
          //headerRight:() => ( <ShoppingCartIcon/> ),
          //headerLeft:() => ( <View/>),
          headerStyle: {
              backgroundColor: '#141414',
              elevation: 0,
              shadowOpacity: 0
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
          }
        }}
      />
      <ProfileNav.Screen
        
        name="SignUp"
        component={SignUp}
        options={{
          title:'',
          //headerRight:() => ( <ShoppingCartIcon/> ),
          //headerShown:false,
          headerLeft:() => ( <View/>),
          headerStyle: {
              backgroundColor: '#141414',
              elevation: 0,
              shadowOpacity: 0
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
          }
        }}
      />
      <ProfileNav.Screen
        
        name="Cart"
        component={Cart}
        options={{
          title:'',
          //headerRight:() => ( <ShoppingCartIcon/> ),
          //headerShown:false,
          headerStyle: {
              backgroundColor: '#141414',
              elevation: 0,
              shadowOpacity: 0
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              color: '#ffdc00',
              textAlign: "center",
          }
        }}
      />
    </ProfileNav.Navigator>
);

//Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Home') {
            iconName = focused
            ? 'ios-home'
            : 'ios-home';
          } else if (route.name === 'Shop') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
          }
          else if (route.name === 'Tutorial') {
            iconName = focused
            ? 'ios-videocam'
            : 'ios-videocam';
          }
          else if (route.name === 'Profile') {
            iconName = focused
            ? 'ios-person'
            : 'ios-person';
          }
    
     return <Icon name={iconName}  type='ionicon' size={size} color={color}     />;
       },



       
    })}
tabBarOptions={{
    activeTintColor: '#ffdc00',
    inactiveTintColor: 'gray',
    tabStyle: {
      backgroundColor: '#141414',
      borderColor: '#141414',
    },
    }}
  >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Shop" component= {ShopNavigator}  />
        <Tab.Screen name="Tutorial"  component={TutorialNavigator}/>
        <Tab.Screen name="Profile"  component={ProfileNavigator} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

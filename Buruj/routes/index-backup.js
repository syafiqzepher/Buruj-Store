import * as React from 'react';
import { View,StyleSheet} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ShopList from '../screen/HomeScreen';
import Detail from '../screen/Productinfo';
import Cart from '../screen/CartScreen';
import {Icon, Button} from 'react-native-elements';

const StackNav = createStackNavigator();
const Navigator = () => (
  <NavigationContainer>
    <StackNav.Navigator initialRouteName="ShopList">
      <StackNav.Screen
        name="Shop"
        component={ShopList}
        // static navigationOptions = ({ navigation }) => ({
        options={{

          headerRight:() => ( 
          //<ShoppingCartIcon/> 
          //<Icon name='shopping-cart' type='entypo'  color='white' size={20} style={{marginRight:10}}/>
          <Button
          icon={<Icon name='shopping-cart' color='#ffffff' />}
          buttonStyle={{backgroundColor:'#141414'}}
          //onPress={() => {navigation.navigate(`Cart`)}}
          title=""
          color="#fff"
          />
          ),
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
              fontWeight: 'normal',
          }
        }}
        
      />
      <StackNav.Screen
        
        name="Detail"
        component={Detail}
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
      <StackNav.Screen
        
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
    </StackNav.Navigator>
  </NavigationContainer>
);

export default Navigator;

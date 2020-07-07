import React, {Component, useState} from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";
import ProductInfo from '../../data/cart';
import * as firebase from "firebase";
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../Styles/CartStyle';

const ProductList = ({route,navigation}) => {

  const{data} = route.params;
  const{color} = route.params;
  const{quantity} = route.params;
  const{image} = route.params
  const[cart,setCart] = useState([])

  const Cartitem = [
    {
      id:data.id,
      price:data.price,
      name: data.name,
      Color: color,
      Quantity: quantity,
    }
  ]

  const renderProductItem = ({item}) => (
    
    <View style={[styles.itemContainer, { backgroundColor: 'white', borderRadius: 5,borderColor: 'lightgrey',borderWidth:1}]}>
      <View style={[{flex:1 , flexDirection:'row' }]}>
        <Image source={{uri:image}}
          style={{width: 163, height: 170,}}>
        </Image>
           <View style={{ flex: 1, justifyContent: 'center',paddingLeft:10}}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemName}>Color : {item.Color}</Text>
            <Text style={styles.itemName}>Price: RM{item.price}</Text>
            <Text/>
            <Text style={styles.itemName}>Quantity : {item.Quantity}</Text>
          </View>
     {console.log(item.id)}
    </View>
  </View>
  
  );
    return (
      
      <View style={styles.container} >
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
        <FlatList
        data={Cartitem}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />

      </View>
    );
  }
    


export default ProductList;
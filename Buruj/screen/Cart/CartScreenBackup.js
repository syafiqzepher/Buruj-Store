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
  const[cart,setCart] = useState([]
    )
  const Cartitem = [
    {
      id:data.id,
      price:data.price,
      name: data.name,
      Color: color,
      Quantiy: quantity,
    }
  ]

  const renderProductItem = ({item}) => (
    <View style={[styles.itemContainer, { backgroundColor: 'white', borderRadius: 5,borderColor: 'lightgrey',borderWidth:1}]}>
      <View style={[{flex:1 , flexDirection:'row' }]}>
        <Image source={{uri:item.image}}
          style={{width: 163, height: 170,}}>
        </Image>
           <View style={{ flex: 1, justifyContent: 'center',paddingLeft:10}}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemName}>Color : {item.color}</Text>
            <Text style={styles.itemName , {marginBottom: 5}}>Price: RM{item.price}</Text>
            <Text style={styles.itemName}>Quantity : {item.quantity}</Text>
          </View>
     {console.log(item.id)}
    </View>
  </View>
  
  );
  if(!firebase.auth().currentUser){
    return(
      <View style={{flex:1,justifyContent:'center',}}>
        <Text>Please Login to proceed</Text>
      </View>
    )
  }else{
    return (
      
      <View style={styles.container} >
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
        <FlatList
        data={ProductInfo}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />

      <Text>product is {Cartitem.name} with color {color} and quantity of {quantity}</Text>
       {console.log( `\n\n\n\n`)} 
      </View>
    );
  }
    
  };

export default ProductList;
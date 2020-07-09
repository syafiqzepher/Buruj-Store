import React, {Component, useState, useEffect} from 'react';
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
import database from '@react-native-firebase/database';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../Styles/CartStyle';

const ProductList = ({route,navigation}) => {

    const [cartItem,setCartitem]= useState();
    const [name,setname]= useState('');

    const fetctCart = () => {
      if(firebase.auth().currentUser){
        database()
        .ref('CartList/' + firebase.auth().currentUser.displayName)
        .once('value')
        .then(snapshot => {
          let data = snapshot.val();
          let Item = [];
          for( let key in data){
            Item.push({
              color: data[key].color, 
              image: data[key].image, 
              name: data[key].name, 
              price: data[key].price, 
              quantity: data[key].quantity,
              key: data[key],
            })
    
          }
          setCartitem(Item);

       
        });
      }
    }

    useEffect(()=>{
      fetctCart();
      return () => {

      }
    },[fetctCart])
  
  /*
  await database()
  .ref('/users/123')
  .remove();
   */

  const renderProductItem = ({item}) => (
    
    <View style={[styles.itemContainer, { backgroundColor: 'white', borderRadius: 5,borderColor: 'lightgrey',borderWidth:1}]}>
      <View style={[{flex:1 , flexDirection:'row' }]}>
        <TouchableOpacity style={[{flex:1 , flexDirection:'row' }]}>
        <Image source={{uri:item.image}}
          style={{width: 163, height: 170,}}>
        </Image>
           <View style={{ flex: 1, justifyContent: 'center',paddingLeft:10}}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemName}>Color : {item.color}</Text>
            <Text style={styles.itemName}>Price: RM{item.price}</Text>
            <Text/>
            <Text style={styles.itemName}>Quantity : {item.quantity}</Text>
          </View>
        </TouchableOpacity>
    </View>
  </View>
  
  );
  if(firebase.auth().currentUser){
    return ( 
      <View style={styles.container} >
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
        <FlatList
        data={cartItem}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
      </View>
    );
  }else{
    return(
      <View style={styles.container,{flex: 1, justifyContent:'center',alignItems:'center'}} >
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
        <Text style={{fontSize:20}}>Please Login To Proceed</Text>
      </View>
    );
  }
  }
    


export default ProductList;
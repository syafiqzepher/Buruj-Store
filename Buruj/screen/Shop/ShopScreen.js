import React, {Component} from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import ProductInfo from '../../data/data';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../../Styles/ShopStyle';

const ProductList = ({navigation}) => {

  const renderProductItem = ({item}) => (
    <View style={[styles.itemContainer, { backgroundColor: 'white'}]}>
      <View style={[{flex:1}]}>
        <TouchableOpacity onPress={() => {navigation.navigate(`Detail`, {data : item})}}>
          <Image source={{uri:item.image}}
          style={{width: 163, height: 170,}}>
          </Image>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>RM {item.price}</Text>
          <TouchableOpacity style={styles.BuyButton} onPress={() => {navigation.navigate(`Detail`, {data : item})}}>
            <Text style={styles.BuyButtonText}> Buy Now </Text>
          </TouchableOpacity>
          { console.log(item.id)}
        </TouchableOpacity>
    </View>
  </View>
  );

    return (
      
      <View style={styles.container} >
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
        <FlatGrid
        itemDimension={130}
        items={ProductInfo}
        style={styles.gridView}
        renderItem={renderProductItem}
      />
       {console.log( `\n\n\n\n`)} 
      </View>
    );
  };

export default ProductList;
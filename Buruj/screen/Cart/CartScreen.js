import React, {Component, useState, useEffect} from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import {Header,Card,Button,Icon } from 'react-native-elements';
import * as firebase from "firebase";
import database from '@react-native-firebase/database';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../Styles/CartStyle';

const ProductList = ({route,navigation}) => {

    const [cartItem,setCartitem]= useState();
    const [orderKey,setOrderkey] = useState();
    const [name,setname]= useState('');
    const [subTotal,setSubTotal] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);

      //
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
              key: data[key].key,
            })
          
          }
          setCartitem(Item);

        });
      }
    }
    
    const DeleteItem = () => {
      Alert.alert(
        '',
        'Do you want to delete this item?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => 
           { 
            database()
            .ref('Cartlist/' + firebase.auth().currentUser.displayName)
            .remove()
            .then(function() {
               console.log("Remove succeeded.")
             })
             .catch(function(error) {
               console.log("Remove failed: " + error.message)
             });
          }
          }
        ],
        { cancelable: false }
      );
    }

    const calctotalPrice = (price,quantity) => {
      setSubTotal((price * quantity));
      
    }


    useEffect(()=>{
      fetctCart();
      return () => {

      }
    },[fetctCart])
  

  const renderProductItem = ({item}) => (
    
    <View style={[styles.itemContainer, { backgroundColor: 'white', borderRadius: 5,borderColor: 'lightgrey',borderWidth:1}]}>
      <View style={[{flex:1 , flexDirection:'row' }]}>
        <TouchableOpacity style={[{flex:1 , flexDirection:'row' }]} 
        onLongPress ={DeleteItem}
        >
        <Image source={{uri:item.image}}
          style={{width: 163, height: 170,}}>
        </Image>
           <View style={{ flex: 1, justifyContent: 'center',paddingLeft:10,marginTop:10}}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemName}>Color : {item.color}</Text>
            <Text style={styles.itemName}>Price: RM{item.price}</Text>
            {setOrderkey(item.key)}
            <Text/>
            <Text style={styles.itemName}>Quantity :</Text>
            
            {/* Quantity  */}
               <View style={{marginTop: 5,marginBottom:20,flexDirection: 'row',}}>

                        <TouchableOpacity
                        style={styles.button}
                          //onPress={setCountMinus} 
                          >
                          <Icon name='minus' type='entypo' color='black' size={20}/>
                        </TouchableOpacity>
                    
                    <View style={styles.countFlex}>
                      <View style={[styles.countContainer]}>    
                      <Text style={[styles.countText]}> {item.quantity}</Text>    
                      </View>
                    </View>

                        <TouchableOpacity
                        style={styles.button}
                        //onPress={setCountPlus}
                        >
                          <Icon name='plus' type='entypo'color='black' size={20}/>
                        </TouchableOpacity>
                    
                  </View>
            {//setSubTotal((item.price * item.quantity))
            }
            {calctotalPrice(item.price,item.quantity)}
          </View>
        </TouchableOpacity>
    </View>
  </View>
  
  );
  if(firebase.auth().currentUser){
    if(firebase.auth().currentUser.email == 'admin@gmail.com'){
      return ( 
<View style={styles.container,{flex: 1, justifyContent:'center',alignItems:'center'}} >
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
    <Text style={{fontSize:20}}>Admin Mode</Text>
      </View>
      );
    }else{
      return ( 
        <View style={styles.container} >
          <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
          <FlatList
          data={cartItem}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          onLongPress={() => {DeleteItem(item.key)}}
        />
        <View style={{ height:'10%',backgroundColor:'lightgrey'}}>
          <View style={{flex:1,flexDirection:'row'}}>
          <View style ={{width:'30%'}}>
              
          </View>
  
  
          <View style={{flex:1,flexDirection:'row'}}> 
          <View style ={{ backgroundColor:'lightgrey',width:'70%' , justifyContent:'center',width:'60%',}}>
            <Text style={{ color: "grey",fontSize: 16,}} >SubTotal : <Text style={{ color: "black",fontSize: 16,}}>RM {subTotal}</Text></Text>
          </View>
      
            <TouchableOpacity style ={{backgroundColor:'#16a085', width:'40%', justifyContent:'center',alignItems:'center'}}
             onPress={()=>{navigation.navigate('Order', {key : orderKey})}}>
               <Text style={{color:'white',fontSize:15, fontWeight:'bold'}} >Check Out</Text>
            </TouchableOpacity>
           
    
          
          </View>
          
  
          </View>
          </View>
        </View>
      );
    }
    
  }else{
    return(
      <View style={styles.container,{flex: 1, justifyContent:'center',alignItems:'center'}} >
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
    <Text style={{fontSize:20}}>Please Login to Continue</Text>
      </View>
    );
  }
  }
    


export default ProductList;
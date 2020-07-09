//ADA PROBLEM NGAN VIRTUALIZED LIST ( GUNA LISTHEADERCOMPONENT // TGH DISABLE YELLOWBOX)

import React, {Component, useState, useEffect} from 'react';
import { 
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ListHeaderComponent,
  ListFooterComponent,
} from "react-native";
import * as firebase from "firebase";
import database from '@react-native-firebase/database';
import {Header,Card,Button,Icon } from 'react-native-elements';
import BackgroundCarousel from '../../components/BackgroundCarousel';
import styles from '../../Styles/ProductInfoStyle';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

const ProductDetail = ({route,navigation}) => {
  const{data} = route.params;
  const [count, setCounter] = useState(1);
  const [Quantity, setQuantity] = useState (1);
  const [Color, setColor] = useState('');
  const [Image, setImage] = useState('');
  const [selected, setSelected] = useState(new Map());
  const [Product,setProduct] = useState([]);

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  const setCountPlus = () => {
    (setCounter(count + 1),setQuantity(count+1));
    };
  const setCountMinus = () => {
    (count != 1 ) ? (setCounter(count - 1 ),setQuantity(count - 1 )) : '' ;
    };
  const setAddproduct = (item) => {
    setProduct([... Product, {
      id: Math.floor(Math.random() * 10 ) + 1,
      name : item.name,
      color: Color,
      quantity : Quantity,
    }]);
  }

  useEffect(() => {


  })

  function ColorItem({ id, name, image, selected, onSelect }) {
    return (
        <TouchableOpacity
          onPress={() => (onSelect(id),setColor(name),setImage(image))}
          style={{
            marginTop: 8,
            marginLeft:20,
            marginBottom:5,
            alignItems: 'center',
            backgroundColor: id,
            //opacity: selected ? 2 : 0.3 ,
            padding: 10,
            width: 40,
            height:40,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft:20,
          }}
        >
        </TouchableOpacity>
      );
    }

  const AddtoCart = () => {
    if(firebase.auth().currentUser){

    (Color == 0 ) ? Alert.alert(
      "",
      "Please choose a color",
    ) : (
    //alert('You buy ' + data.name + ' with a quantity of ' + Quantity + ' with color: ' + Color);
    //navigation.navigate(`Cart`) ;
    //newPostKey = app.database().ref().child('OrderId').push().key;
    
    firebase.database().ref('CartList/' + firebase.auth().currentUser.displayName).push({
        name:data.name,
        price:data.price,
        color:Color,
        image:Image,
        quantity:Quantity
      }).then((data) => {
        console.log('order has been submitted')
        
      }).catch((error) => {
        console.log('error', error)
      })
     ,navigation.navigate(`Cart`))

    }else{
      Alert.alert(
        "",
        "Please login to continue",
      ) 
    }
  };

    return (

      <View style={styles.containerImage}>
      <ScrollView>
        <BackgroundCarousel images = {data.cimage}/>

        <View style={styles.container}>
            <Card>
                <Text style={{ color:'#404040',fontWeight:'bold',}}>
                {data.name}
                </Text>
                <Text style={{marginBottom: 20}}>Price: {data.price}</Text>
                <Text style={styles.titleDesc}>{data.desc}</Text>
               
               {/* Quantity  */}
               <Text style={{color:'#404040',fontWeight:'bold'}}>Quantity :</Text>
               <View style={styles.mainFlex}>

                        <TouchableOpacity
                        style={styles.button}
                          onPress={setCountMinus} >
                          <Icon name='minus' type='entypo' color='black' size={20}/>
                        </TouchableOpacity>
                    
                    <View style={styles.countFlex}>
                      <View style={[styles.countContainer]}>    
                      <Text style={[styles.countText]}>{count}</Text>    
                      </View>
                    </View>

                        <TouchableOpacity
                        style={styles.button}
                        onPress={setCountPlus}>
                          <Icon name='plus' type='entypo'color='black' size={20}/>
                        </TouchableOpacity>
                    
                  </View>

              {/* Color */}
   
              <Text style={{color:'#404040',fontWeight:'bold'}}>Color : {Color}</Text>
               <View style={styles.mainFlex}>
               
                <FlatList
                    data={data.color}
                    contentContainerStyle={{flexDirection: 'row'}}
                    renderItem={({ item }) => (
                      <ColorItem
                        id={item.code}
                        name={item.name}
                        image={item.uri}
                        selected={!!selected.get(item.code)}
                        onSelect={onSelect}
                      />
                    )}
                    keyExtractor={item => item.id}
                    extraData={selected}
                  />
                  {console.log(`\n\n`)}
                </View>
              
                <Button
                icon={<Icon name='shopping-cart' color='#ffffff' />}
                buttonStyle={{backgroundColor:'#5B1381',borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,height:40,}}
                onPress={AddtoCart}
                title=' Add to Cart'
                />
                
              
                   
                </Card>
                <View style={{marginTop: 20}}></View>    
        </View>
        </ScrollView>
    </View>
    );
  };

export default ProductDetail;
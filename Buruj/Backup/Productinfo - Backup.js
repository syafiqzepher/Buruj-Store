//ADA PROBLEM NGAN VIRTUALIZED LIST ( GUNA LISTHEADERCOMPONENT // TGH DISABLE YELLOWBOX)

import React, {Component} from 'react';
import { 
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ListHeaderComponent,
  ListFooterComponent,
} from "react-native";
import {Header,Card,Button,Icon } from 'react-native-elements';
import BackgroundCarousel from './BackgroundCarousel';
import styles from '../Styles/ProductInfoStyle';
import { FlatList } from 'react-native-gesture-handler';

const ProductDetail = ({route,navigation}) => {
  const{data} = route.params;

  const renderColor = ({item}) => (
    <TouchableOpacity style={{
      marginTop: 10,
      alignItems: 'center',
      backgroundColor: item,
      padding: 10,
      width: 40,
      height:40,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:20,
     }}>{ console.log(item)}</TouchableOpacity>
     
  );

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

                    <View style={styles.firstFlex}>
                        <TouchableOpacity
                        style={styles.button}
                          //onPress={this.onPressMinus}
                          >
                          <Text style={{fontWeight:"bold",fontSize:35, marginBottom:5,}}> - </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secondFlex}>
                      <View style={[styles.countContainer]}>        
                      </View>
                    </View>

                    <View style={styles.thirdFlex}>
                        <TouchableOpacity
                        style={styles.button}
                          //onPress={this.onPressPlus}
                          >
                          <Text style={{fontWeight:"bold",fontSize:22, marginBottom:3,}} > + </Text>
                        </TouchableOpacity>
                    </View>
                  </View>

                  {/* Color */}
              <Text style={{color:'#404040',fontWeight:'bold'}}>Color :</Text>
               <View style={styles.mainFlex}>
               <FlatList
                    contentContainerStyle={{flexDirection: 'row'}}
                    data={data.color}
                    renderItem={renderColor}
                    /> 
                  {console.log(`\n\n`)}
                </View>
               
                <Button
                icon={<Icon name='shopping-cart' color='#ffffff' />}
                buttonStyle={{backgroundColor:'#5B1381',borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,height:40,}}
                disabled
                //onPress={}
                //title=' Add to Cart'
                title=' Out of Stock'
                />
                </Card>
                <View style={{marginTop: 20}}></View>    
        </View>
        </ScrollView>
    </View>
    );
  };

export default ProductDetail;
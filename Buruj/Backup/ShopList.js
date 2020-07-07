
import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  Text,
  List,
  Card,
  StyleService,
  useStyleSheet,
  Input,
  Spinner,
} from '@ui-kitten/components';
import ProductData from '../data/data';
import { color } from 'react-native-reanimated';

const ProductList = ({navigation}) => {

    const styles = useStyleSheet(themedStyles);
    const renderItemHeader = (item) => (
      <ImageBackground style={styles.itemHeader} source={{uri: item}} />
    );

    const renderProductItem = ({item}) => (
      <Card
        key={item.id}
        style={styles.productItem}
        header={() => renderItemHeader(item.image)}
        // footer={() => renderItemFooter(item)}
        onPress={() => {
          navigation.navigate('Detail', {
            data: item,
          });
        }}
        >
        <Text category="s1" >{item.name}</Text>
        <Text category="s1" >{item.price}</Text>
      </Card>
    );
  
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{flex: 1, margin: 10}}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
                  <List
                    data={ProductData}
                    style={styles.container}
                    contentContainerStyle={styles.productList}
                    numColumns={2}
                    renderItem={renderProductItem}
                  />
            </View>
          </View>
          <View style={{height: 30}} />
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const themedStyles = StyleService.create({
    container: {
      flex: 1,
      backgroundColor: 'background-basic-color-2',
      // flexDirection: '',
    },
    productList: {
      paddingHorizontal: 8,
      paddingVertical: 16,
    },
    productItem: {
      flex: 1,
      margin: 8,
      maxWidth: Dimensions.get('window').width / 2 - 24,
      backgroundColor: 'background-basic-color-1',
    },
    itemHeader: {
      height: 140,
      // width: Dimensions.get('window').width / 2 - 24,
    },
    itemFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconButton: {
      paddingHorizontal: 0,
    },
    loadContainer: {
      flex: 1,
      padding: 22,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default ProductList;
  
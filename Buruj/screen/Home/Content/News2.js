import React, {Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { blockStatement } from '@babel/types';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class NewsScreen extends Component{

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#141414',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };



  render() {
    return (
      <ScrollView>
      <View style={styles.screen}>
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
      <View style={styles.imageContainer}>
        <Image
        source={{uri: 'https://gdurl.com/N13r'}}
        style={{width: "100%", height: 370, resizeMode: 'center'}}/>
        </View>
        <View style={{alignItems: 'center'}}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>MID-YEAR SUPER SALE</Text>

          <View style={styles.textBorder}>
          <Text style={styles.textTitle}>MODEL NAME</Text>
          <Text style={styles.textContent}>Buruj Qibla</Text>
          </View>

          <View style={styles.textBorder2}>
          <Text style={styles.textTitle}>DATE</Text>
          <Text style={styles.textContent}>Start: 2 July 2020</Text>
          <Text style={styles.textContent}>End: 31 July 2020</Text>
          </View>

          <View style={styles.textBorder2}>
          <Text style={styles.textTitle}>PRICE</Text>
          <Text style={styles.textContent}>
            Normal: RM249 {"\n"}
            Promo: RM175</Text>
          </View>

          <View style={styles.textBorder2}>
          <Text style={styles.textTitle}>SPECIAL GIFT</Text>
          <Text style={styles.textContent}>
            Tasbih Digital {"\n"}
            Manual Book{"\n"}
            Bookmark{"\n"}
            Buruj Paperbag{"\n"}
            Gift Voucher RM10</Text>
          </View>

          <View style={styles.textBorder2}>
          <Text style={styles.textTitle}>WARRANTY</Text>
          <Text style={styles.textContent}>1 Year or 12 Months</Text>
          </View>

          <View style={{paddingVertical:10}}>
          <Text style={styles.textTitle}>POSTAGE</Text>
          <Text style={styles.textContent}>Free Delivery - Pos Laju</Text>
          </View>
        </View>
        </View>
        <View style={{alignItems: 'center', marginBottom: 30}}>
        <TouchableOpacity style={styles.button} //onPress={() => this.props.navigation.navigate('BurujQibla')}
        >
          <Text style={styles.buttonText}>GET PROMO NOW</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  descriptionContainer: {
    borderColor: "#b2babb",
    borderWidth: 1,
    borderTopWidth: 0,
    marginBottom: 15,
    padding: 10,
    width: "90%"
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 20,
    letterSpacing: 1
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1
  },
  textContent: {
    textTransform: "uppercase",
    fontSize: 13,
    
  },
  textBorder: {
    borderColor: "#e5e7e9",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  textBorder2: {
    borderColor: "#e5e7e9",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: 'lightgrey',
    backgroundColor:'#45105E',
    width: "45%"
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'white',
    padding: 10,
  }
});
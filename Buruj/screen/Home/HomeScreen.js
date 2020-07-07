import React, {Component} from 'react';
import { Text,View,TouchableOpacity,StyleSheet,Image,StatusBar,ScrollView} from "react-native";
import {Icon}from 'react-native-elements';
import BackgroundCarousel from '../../components/BackgroundCarousel';
import Video from 'react-native-video';
import { SliderBox } from "react-native-image-slider-box";

const images = [
  "https://gdurl.com/W736",
  "https://gdurl.com/pFy6",
  "https://gdurl.com/PogZ",
  "https://gdurl.com/KphH"
];

export default class HomeScreen extends Component {
  

  constructor(props){
    super(props);

    this.state={
    repeat: true,
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'cover', // video's mode: none, cover, stretch, contain
    duration: 0.0, // video's duration set on event onLoad
    currentTime: 0.0, // set on event onProgress
    paused: false, // check if video is pausing or not
    rateText: '1.0', // rate value in component Picker
    pausedText: 'Play', // view to user: 'Play' - when video is pausing, 'Pause' - when video is playing
    hideControls: false, // hide control button when video is playing and show it when user clicks on video
    };

    this.state = {
      images: [
        "https://gdurl.com/Eutu",
        "https://gdurl.com/eyt3",
        "https://gdurl.com/HXkb",
        "https://gdurl.com/Zosh", // Network image
      ]
    };
  }

  onLoad=(data)=> {
    this.setState({duration: data.duration})
  }

  onEnd=() => {
    this.setState({ paused: false});
    this.video.seek(0);  
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.screen}>
        <StatusBar backgroundColor = "#141414" barStyle = "light-content"/>
      <View style={styles.sliderContainer}>
        {<BackgroundCarousel images = {images}/>}
      </View>

      <View style={{backgroundColor: '#ecf0f1'}}>
        <Text style={{padding: 18, textAlign: 'center', fontWeight: 'bold'}}>READY STOCK ARRIVED WITHIN 1-3 DAYS ONLY</Text>
      </View>

      <View style={styles.imageContainerFirst}>
        <View style={styles.videoContainer}>

          <Video
                ref={(ref) => {this.video = ref}}     
                source={{uri: 'https://gdurl.com/C_jgJ'}}
                repeat={this.state.repeat}
                rate={this.state.rate}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}   
                paused={this.state.paused}
                onLoad={this.onLoad}
                onProgress={this.onProgress}
                onEnd={this.onEnd}
                poster="https://gdurl.com/dpAf" // uri to an image to display until the video plays
                posterResizeMode="stretch"              // Poster resize mode. One of contain (default), cover, stretch, center, repeat
                // posterStyles={{resizeMode: 'cover'}} 
                style={styles.backgroundVideo}
              />
        </View>
        </View>

        <View style={{marginTop: 10, marginBottom: 25,}}>
        <View>
        <Text style={{fontWeight: 'bold', fontSize: 35, textAlign: 'center', marginVertical: 20}}>BURUJ'S FUNCTIONS</Text>
        <Image
        source={{uri: 'https://gdurl.com/auap'}}
        style={{width: "100%", height: 370, resizeMode: 'center', marginBottom: 25,}}/>
        </View>
        
        <View style={{marginLeft: -215}}>
        <View style={styles.groupfx}>
        <Image
        source={{uri: 'https://gdurl.com/YDq9'}}
        style={styles.iconFx}/>
        <View style={{marginHorizontal: -115,}}></View>
        <Text style={styles.textfx}>World Prayer Times</Text>
        </View>
        
        <View style={styles.groupfx}>
        <Image
        source={{uri: 'https://gdurl.com/aJdF'}}
        style={styles.iconFx}/>
        <View style={{marginHorizontal: -115,}}></View>
        <Text style={styles.textfx}>Automatic Qibla Compass</Text>
        </View>

        <View style={styles.groupfx}>
        <Image
        source={{uri: 'https://gdurl.com/AT2bw'}}
        style={styles.iconFx}/>
        <View style={{marginHorizontal: -115,}}></View>
        <Text style={styles.textfx}>Set Name Your Name</Text>
        </View>
        
        <View style={styles.groupfx}>
        <Image
        source={{uri: 'https://gdurl.com/oSZJ'}}
        style={styles.iconFx}/>
        <View style={{marginHorizontal: -115,}}></View>
        <Text style={styles.textfx}>Alarm Azan (Beep Sound)</Text>
        </View>

        <View style={styles.groupfx}>
        <Image
        source={{uri: 'https://gdurl.com/HFeF'}}
        style={styles.iconFx}/>
        <View style={{marginHorizontal: -115,}}></View>
        <Text style={styles.textfx}>Digital Quran Bookmarker</Text>
        </View>
        </View>
        </View>

        <Image
        source={{uri: 'https://gdurl.com/Xtjp'}}
        style={{width: '100%', height: 180, resizeMode: 'stretch', marginVertical: 20}}/>

        <Text style={{fontWeight: 'bold', fontSize: 35, textAlign: 'center',}}>MID-YEAR SALE</Text>

        <View style={styles.innerFlex}>
        <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsScreen')}>
        <View style={styles.imageContainer2}>
          <Image
          source={{uri: 'https://gdurl.com/hEVf'}}
           style={{width: 170, height: 170, resizeMode: 'center'}}/>
          <View style={styles.textContainer}>
            <Text style={styles.textImage}>Find Out More</Text>
          </View>
        </View>
        </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 15}}></View>
        
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('News2Screen')}>
        <View style={styles.imageContainer2}>
        <Image
        source={{uri: 'https://gdurl.com/NH5X'}}
           style={{width: 170, height: 170, resizeMode: 'center'}}/>
          <View style={styles.textContainer}>
            <Text style={styles.textImage}>Find Out More</Text>
          </View>
        </View>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.imageContainerLast}>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('News3Screen')}>
        <View style={styles.imageContainer1}>
        <Image
        source={{uri: 'https://gdurl.com/LOpr'}}
           style={{width: "100%", height: 370, resizeMode: 'center'}}/>
          <View style={styles.textContainer2}>
            <Text style={styles.textImage2}>Find Out More</Text>
          </View>
        </View>
        </TouchableOpacity>
        </View>
        </View>

        <View>
        <Text style={{fontWeight: 'bold', fontSize: 35, textAlign: 'center', marginTop: 10, marginBottom: 30,}}>BURUJ'S TESTIMONIALS</Text>
        </View>

        <SliderBox
        images={this.state.images}
        // sliderBoxHeight={}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#ffdc00"
        inactiveDotColor="#90A4AE"
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 15,
          padding: 0,
          margin: 0
        }}
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        // resizeMethod={'resize'}
        resizeMode={'cover'}
        ImageComponentStyle={{width: '100%', height: 500, resizeMode: 'center',}}
        />

        <View style={{marginTop: 50}}></View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
  },
  sliderContainer: {
  },
  imageContainerFirst: {
    alignItems: 'center',
  },
  imageContainerLast: {
    marginBottom: 30,
  },
  imageContainer1: {
    alignItems: 'center',
  },
  videoContainer: {
    width: "100%",
    height: 415,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  imageContainer2: {
    alignItems: 'center',
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "#b2babb",
    borderTopWidth: 0,
    width: '100%',
  },
  textContainer2: {
    borderWidth: 1,
    borderColor: "#b2babb",
    borderTopWidth: 0,
  },
  textImage: {
    textAlign: 'center',
    color:'black',
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  textImage2: {
    textAlign: 'center',
    color:'black',
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 135,
    paddingVertical: 10,
  },
  innerFlex: {
    justifyContent: 'center',
    marginVertical: 30,
    flexDirection: 'row'
  },
  textfx: {
    textAlign: 'center',
    fontSize: 25,
  },
  iconFx: {
    width: '85%',
    height: 30,
    resizeMode: 'center',
  },
  groupfx: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 9,
  }
});

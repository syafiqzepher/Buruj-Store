import React, {Component} from 'react';
import {View,StyleSheet, Text, ScrollView} from "react-native";
import Video from 'react-native-video';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export default class TutorialScreen extends Component {

  constructor(props){
    super(props);

    this.state={
    repeat: false,
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'stretch', // video's mode: none, cover, stretch, contain
    duration: 0.0, // video's duration set on event onLoad
    currentTime: 0.0, // set on event onProgress
    paused: false, // check if video is pausing or not
    rateText: '1.0', // rate value in component Picker
    pausedText: 'Play', // view to user: 'Play' - when video is pausing, 'Pause' - when video is playing
    hideControls: false, // hide control button when video is playing and show it when user clicks on video
    };
  }

  onLoad=(data)=> {
    this.setState({duration: data.duration})
  }

  onPress=(data)=> {
    this.setState({currentTime: data.currentTime});
  }

  onEnd=() => {
    this.setState({pausedText: 'Play', paused: true});
    this.video.seek(0);
  }

  //Change Header 
  static navigationOptions = {
    headerTitle: 'Tutorial',
    headerRight:<Icon
    name='shopping-cart'
    color='#FFFFFF'
    onPress={() => alert('Cart Page is on progress')} />,
    headerLeft:<View/>,
    headerStyle: {
      backgroundColor: '#141414',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: "center",
      justifyContent: 'center',
      flex: 1,
      textAlignVertical: 'center',
      color:'#FFFFFF',
      fontSize: 15,
      fontWeight:'bold',
      },
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.screen}>

          <View style={styles.container}>

            <View style={styles.textContainer}>
              <Text style={styles.titleText}>BURUJ WATCHES FEATURES</Text>
            </View>

            <View style={styles.videoContainer}>
              <Video
                ref={(ref) => {this.video = ref}}     
                source={{uri: 'https://gdurl.com/N8l5'}}
                repeat={this.state.repeat}
                rate={this.state.rate}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}   
                paused={this.state.paused}
                onLoad={this.onLoad}
                onProgress={this.onProgress}
                onEnd={this.onEnd}
                poster="https://gdurl.com/IYm4" // uri to an image to display until the video plays
                posterResizeMode="stretch"              // Poster resize mode. One of contain (default), cover, stretch, center, repeat
                // posterStyles={{resizeMode: 'cover'}} 
                style={styles.backgroundVideo}
              />
            </View>
            <View style={styles.frameContainer}></View>

            <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.buttonPlay} onPress={() => this.setState({paused: !this.state.paused})}>
            <Text style={{padding: 8, color: 'white', fontSize: 15, fontWeight: 'bold'}}>PLAY/PAUSE</Text>
            </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.container2}>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>WATCH MORE VIDEOS</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => this.props.navigation.replace('Tutorial2')}>
              <Text style={styles.buttonText}>Qibla Calibration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => this.props.navigation.replace('Tutorial3')}>
              <Text style={styles.buttonText}>Set Azan Times</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => this.props.navigation.replace('Tutorial4')}>
              <Text style={styles.buttonText}>Quran Bookmarker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => this.props.navigation.replace('Tutorial5')}>
              <Text style={styles.buttonText}>Set Your Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => this.props.navigation.replace('Tutorial6')}>
              <Text style={styles.buttonText}>DST Select</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => this.props.navigation.replace('Tutorial7')}>
              <Text style={styles.buttonText}>Azan Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
           onPress={() => this.props.navigation.replace('Tutorial8')}>
             <Text style={styles.buttonText}>Set Your Country</Text>
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
  container: {
  },
  container2: {
    marginTop: 30
  },
  videoContainer: {
    width: "100%",
    height: 180,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  frameContainer: {
    width: '100%',
    backgroundColor: '#16a085',
    height: 40
  },
  buttonPlay: {
    backgroundColor: '#909497',
    alignItems: 'center',
    marginTop: 5,
    width: '30%',
    borderRadius: 3
  },
  titleText: {
      alignSelf: 'center',
      textAlign: "center",
      justifyContent: 'center',
      flex: 1,
      fontSize: 17,
      textAlignVertical: 'center',
      color:'white',
      padding: 5,
      fontWeight: 'bold'
  },
  textContainer: {
    padding: 5,
    backgroundColor: '#16a085'
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderColor: '#b2babb',
    alignItems: 'center',
  },
  buttonText: {
    padding: 10,
    fontSize: 17,
  }
});
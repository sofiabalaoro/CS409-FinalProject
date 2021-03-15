import React, { Component } from "react";
import { SliderBox } from "react-native-image-slider-box";
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    Platform, Image, TouchableOpacity, Text, Button
  } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Video} from 'expo-av';



class FifthPage extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      images: [
       require('./img/water1.png'),
       require('./img/water2.png'),
       require('./img/water3.png'),
       require('./img/water4.png'),
      ],
      status: '',
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
          <Video
      style={styles.video}
      source={require('./assets/savewater.mp4')}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={this.state.status} />
       <View style={styles.container}>
      <Text style={styles.text}>Water Conservation</Text>
      <Text style={styles.text1}>Source: Youtube (GOOD Magazine) </Text>
        </View>
          </View>
          <View style={styles.container}>
        <Image style={{marginTop: 15}}source={require('./img/watertitle.png')} />
        </View>
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          autoplay
          disableOnPress
          sliderBoxHeight={500}
          dotColor="black"
          inactiveDotColor="gray"
          circleLoop
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 20,
            marginHorizontal: 3,
            padding: 0,
            margin: 0
            
          }}
          ImageComponentStyle={{borderRadius: 15, width: '90%',}}
          imageLoadingColor="transparent"
        />
          </View>
          <View styles={styles.container1}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstPage')}>
          <Text style={{color: 'gray', fontSize: 15}}>BACK TO HOME</Text>
            </TouchableOpacity>
          
          </View>
        </ScrollView>
    
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 200,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 5,
    borderRadius: 20,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  text1: {
    fontStyle: 'italic',
    marginBottom: 15,
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 20,
    marginTop: 30,
    marginLeft: 17,
    marginBottom: 30,
  },
});
  export default FifthPage;
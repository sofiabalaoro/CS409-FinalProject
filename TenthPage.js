import React, { Component } from "react";
import { SliderBox } from "react-native-image-slider-box";
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    Platform, ImageBackground, Image, TouchableOpacity, Text, Button
  } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';
 

class TenthPage extends React.Component {

    constructor(props) {
      super(props);
    }
 
    render() {
      const { navigation } = this.props;
      return (
      
        
        <View style={styles.container}>
          <ScrollView>
          <ImageBackground style={styles.image} source={require('./img/about_us.png')}>
          </ImageBackground>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstPage')}>
          <Text style={{color: 'gray', fontSize: 15}}>BACK TO HOME</Text>
            </TouchableOpacity>
          

            </ScrollView>
             </View>
      );
    }
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      alignItems: 'center',
    },
    container1: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      width: 400,
      height: 770,
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 20,
    marginLeft: 17,
    marginTop: 10,
    marginBottom: 20,
  },
  });
  export default TenthPage;
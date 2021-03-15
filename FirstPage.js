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
 


class FirstPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        images: [
         require('./img/poster.jpg'),
         require('./img/green.jpg'),
         require('./img/natural.jpg'),
         require('./img/global.jpg'),
         require('./img/research-plant-protection.jpg'),
        ]
      };
    }
 
    render() {
      const { navigation } = this.props;
      return (
        
        <View style={styles.container}>
          <SliderBox
            images={this.state.images}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            autoplay
            disableOnPress
            sliderBoxHeight={200}
            dotColor="yellow"
            inactiveDotColor="gray"
            circleLoop
            dotStyle={{
              width: 13,
              height: 13,
              borderRadius: 20,
              marginHorizontal: 10,
              padding: 0,
              margin: 0
            }}
            imageLoadingColor="transparent"
          />
          <View style={styles.container1}>
      
          <ScrollView> 
          <View style={styles.button1}>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondPage')}>
           <Image style={styles.image} source={require("./img/nature_protection1.png")}/>
            </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThirdPage')}>
           <Image style={styles.image1} source={require("./img/global_warming.png")}/>
            </TouchableOpacity>
            </View>
            <View style={styles.button1}>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FourthPage')}>
           <Image style={styles.image2} source={require("./img/natural_product.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FifthPage')}>
           <Image style={styles.image3} source={require("./img/savethewater.png")}/>
            </TouchableOpacity>
            </View>
            <View style={styles.button1}>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SixthPage')}>
           <Image style={styles.image4} source={require("./img/low_energy.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SeventhPage')}>
           <Image style={styles.image5} source={require("./img/green.png")}/>
            </TouchableOpacity>
            </View>
            <View style={styles.button1}>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EighthPage')}>
           <Image style={styles.image6} source={require("./img/stores.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NinthPage')}>
           <Image style={styles.image7} source={require("./img/organization.png")}/>
            </TouchableOpacity>
            </View>
            <View style={styles.container2}></View>
            </ScrollView>
            </View>
            </View>
      );
    }
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    container1: {
      flex: 1,
    },
    container2: {
      flex: 1,
      marginBottom: 16
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      width: 200,
      marginTop: 16,
    },
    button1: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    image: {
      width:180, 
      height: 180, 
    },
    image1: {
      width:180, 
      height: 180, 
    },
    image2: {
      width:180, 
      height: 180, 
      marginTop: 5,
      
    },
    image3: {
      width:180, 
      height: 180, 
      paddingBottom: 3
    },
    image4: {
      width:180, 
      height: 180, 
      paddingBottom: 3
    },
    image5: {
      width:180, 
      height: 180, 
      paddingBottom: 3
    },
    image6: {
      width:180, 
      height: 180, 
      paddingBottom: 3
    },
    image7: {
      width:180, 
      height: 180, 
      paddingBottom: 3
    },
  });
  export default FirstPage;
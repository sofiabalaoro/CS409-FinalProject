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
import { Video, AVPlaybackStatus } from 'expo-av';
import Hyperlink from 'react-native-hyperlink';


class NinthPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        images: [
         require('./img/org1.png'),
         require('./img/org2.png'),
         require('./img/org3.png'),
         require('./img/org4.png'),
         require('./img/org5.png'),
         require('./img/org6.png'),
         require('./img/org7.png'),
         require('./img/org8.png'),
         require('./img/org9.png'),

        ]
      };
    }
 
    render() {
      const { navigation } = this.props;
      return (
        
        <View style={styles.container}>
            <Image style={{marginTop: 15, marginBottom: 10}}source={require('./img/orgtitle.png')} />
         <View style={styles.container}>
        <ScrollView>
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
            <View styles={styles.container1}>
            <Text style={styles.text}>Visit the respective websites of these eco-friendly organizations to learn how you can help and donate.</Text>
            </View>
      <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>1. World Wide Fund for Nature</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>wwf.org.ph</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>2. Waves for Water</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>www.wavesforwater.org</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>3. Save Philippine Seas</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>www.savephilippineseas.org</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>4. Earth Island Institute</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>www.earthislandph.org</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>5. Greenpeace Philippines</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>www.greenpeace.org.ph</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>6. Haribon Foundation</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>www.haribon.org.ph</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>7. Rare</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>www.rare.org/philippines</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>8. Mother Earth Foundation</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>www.motherearthphil.org</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>9. Philippines Biodiversity Conservation</Text>
      <Text style={styles.sectionTitle2}>Foundation</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription1}>Website: <Text style={styles.sectionDescription}>www.pbcfi.org.ph</Text> </Text>
        </View>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>10. Marine Wildlife Watch of the</Text>
      <Text style={styles.sectionTitle1}>Philippines</Text>
      <Hyperlink linkDefault={true}>
      <View styles={styles.container1}>
        <Text style={styles.sectionDescription2}>Website: <Text style={styles.sectionDescription}>www.mwwphilippines.org</Text> </Text>
        </View>
        </Hyperlink>
    </View>

    <View styles={styles.container1}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstPage')}>
          <Text style={{color: 'gray', fontSize: 15}}>BACK TO HOME</Text>
            </TouchableOpacity>
          
          </View>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    container1: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    container2: {
      flexDirection: 'row',

    },
    text: {
      justifyContent: 'center', 
      alignItems: 'center', 
      fontSize: 20, 
      textAlign: 'center', 
      marginTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
      lineHeight: 25,
      marginBottom: 10,
      
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      justifyContent: 'center',
      marginLeft: 15,
      alignItems: 'center',
      marginTop: 10,
    },
    sectionTitle1: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      justifyContent: 'center',
      marginLeft: 48,
      alignItems: 'center',
    },
    sectionTitle2: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      justifyContent: 'center',
      marginLeft: 38,
      alignItems: 'center',
    },
    sectionDescription: {
      fontSize: 20,
      fontWeight: '400',
      color: 'blue',
      marginBottom: 10,
      textDecorationLine: 'underline',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    sectionDescription1: {
      fontSize: 20,
      fontWeight: '400',
      fontStyle: 'italic',
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 40,
      marginTop: 10,
    },
    sectionDescription2: {
      fontSize: 20,
      fontWeight: '400',
      fontStyle: 'italic',
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 48,
      marginTop: 10,
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
  export default NinthPage;
// import React, { Component } from "react";
// import { SliderBox } from "react-native-image-slider-box";

// import {useNavigation} from '@react-navigation/native';
import React, { useState } from "react";
import {
 StyleSheet,
 View,
 Dimensions,
 ScrollView,
 Platform, Image, TouchableOpacity, Text, Button
} from 'react-native';
import MapView, { Marker } from "react-native-maps";
import Hyperlink from 'react-native-hyperlink';

const EighthPage = ({navigation}) => {
 const [region, setRegion] = useState({
   latitude: 14.663565, 
   longitude: 121.043432,
   latitudeDelta: 0.009,
   longitudeDelta: 0.009
 });
 const [region1, setRegion1] = useState({
    latitude:  14.571962, 
    longitude: 121.082702,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });
  const [region2, setRegion2] = useState({
    latitude: 14.581800703730117,
    longitude: 121.05644067338893,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });
 return (
       <ScrollView>
  <View styles={styles.container}>
  <View styles={styles.container1}>
     <Text style={styles.text}>SOME STORES IN THE PHILIPPINES THAT SELL SUSTAINABLE PRODUCTS</Text>
    </View>

    <View style={{borderBottomColor: 'gray', borderBottomWidth: 1, alignSelf: 'stretch', marginTop: 10}}>
   </View>

   <View styles={styles.container1}>
      <Image style={styles.image} source={require("./img/econest.png")}/>
    </View>
  <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>Website:</Text>
      <Hyperlink linkDefault={true}>
        <Text style={styles.sectionDescription}>https://www.econestph.com/</Text>
        </Hyperlink>
    </View>
    <View styles={styles.container1}>
   <MapView style={styles.map}
     region={region}
     onRegionChangeComplete={region => setRegion(region)}>
     <Marker 
     title="EcoNest Philippines"
     description="Visayas Ave, Quezon City, Metro Manila"
     coordinate={{ latitude: 14.663565, longitude: 121.043432 }} />
   </MapView>
   </View>

   <View style={{borderBottomColor: 'gray', borderBottomWidth: 1, alignSelf: 'stretch', marginTop: 10}}>
   </View>

   <View styles={styles.container1}>
   <Image style={styles.image} source={require("./img/casa.png")}/>
   </View>
   <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>Website:</Text>
      <Hyperlink linkDefault={true}>
        <Text style={styles.sectionDescription1}>https://www.cdlnaturals.com/</Text>
        </Hyperlink>
    </View>
   <View styles={styles.container1}>
   <MapView style={styles.map}
     region={region1}
     onRegionChangeComplete={region1 => setRegion1(region1)}>
     <Marker 
     title="Casa de Lorenzo"
     description="Raymundo Avenue Unit 4 Sy Building, Pasig, Metro Manila"
     coordinate={{ latitude: 14.571962, longitude: 121.082702 }} />
   </MapView>
   </View>

   <View style={{borderBottomColor: 'gray', borderBottomWidth: 1, alignSelf: 'stretch', marginTop: 10}}>
   </View>

   <View styles={styles.container1}>
   <Image style={styles.image} source={require("./img/organics.png")}/>
   </View>
   <View styles={styles.container1}>
      <Text style={styles.sectionTitle}>Website:</Text>
      <Hyperlink linkDefault={true}>
        <Text style={styles.sectionDescription2}>https://www.organics.ph/</Text>
        </Hyperlink>
    </View>
   <View styles={styles.container1}>
   <MapView style={styles.map}
     region={region2}
     onRegionChangeComplete={region2 => setRegion2(region2)}>
     <Marker 
     title="Organics Ph"
     description="Ortigas Center, Mandaluyong, Metro Manila"
     coordinate={{ latitude: 14.581800703730117, longitude: 121.05644067338893 }} />
   </MapView>
   </View>
   <View styles={styles.container1}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstPage')}>
          <Text style={{color: 'gray', fontSize: 15}}>BACK TO HOME</Text>
            </TouchableOpacity>
          
          </View>
   </View>
   </ScrollView>

 
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 container1: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
 map: {
   width: 400,
   height: 300,
   marginBottom: 15,
   marginTop: 10,
 },
 image: {
    width:410, 
    height: 100, 
    marginLeft: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    marginLeft: 170,
    alignItems: 'center',
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: 'blue',
    marginBottom: 10,
    marginLeft: 120,
    textDecorationLine: 'underline',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionDescription1: {
    fontSize: 16,
    fontWeight: '400',
    color: 'blue',
    marginBottom: 10,
    marginLeft: 120,
    textDecorationLine: 'underline',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionDescription2: {
    fontSize: 16,
    fontWeight: '400',
    color: 'blue',
    marginBottom: 10,
    marginLeft: 130,
    textDecorationLine: 'underline',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center', 
    alignItems: 'center', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 35,
    marginBottom: 10,
    
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
 export default EighthPage;
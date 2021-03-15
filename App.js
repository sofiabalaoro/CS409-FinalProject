import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';
import EighthPage from './EighthPage';
import NinthPage from './NinthPage';
import TenthPage from './TenthPage';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Dimensions, ScrollView, Platform, Component } from 'react-native';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        scrollEnabled: true,
        style: {
          backgroundColor: '#253628',
          width: 450,
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel: 'Home',
        }}  />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Nature Protection',
        }} />
          <Tab.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          tabBarLabel: 'Global Warming',
        }} />
          <Tab.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          tabBarLabel: 'Natural Product',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="settings"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }} />
          <Tab.Screen
        name="FifthPage"
        component={FifthPage}
        options={{
          tabBarLabel: 'Save the Water',
        }} />
          <Tab.Screen
        name="SixthPage"
        component={SixthPage}
        options={{
          tabBarLabel: 'Low Energy House',
        }} />
          <Tab.Screen
        name="SeventhPage"
        component={SeventhPage}
        options={{
          tabBarLabel: 'Greenovations',
        }} />
            <Tab.Screen
        name="EighthPage"
        component={EighthPage}
        options={{
          tabBarLabel: 'Stores',
        }} />
         <Tab.Screen
        name="NinthPage"
        component={NinthPage}
        options={{
          tabBarLabel: 'Organizations',
        }} />
         <Tab.Screen
        name="TenthPage"
        component={TenthPage}
        options={{
          tabBarLabel: 'About Us',
        }} />
  
    </Tab.Navigator>
  );
}

function App() {
 
  return (
 
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#253628' },
          headerTintColor: '#EBEBE9',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="GREEN GAINS"
          component={TabStack}
     />
      </Stack.Navigator>
    </NavigationContainer>
   
   );
}


export default App;
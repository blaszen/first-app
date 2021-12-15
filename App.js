import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import gaming from './assets/gaming.jpg';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './screens/Main.js';
import Home from './screens/Home.js';
import Profile from './screens/Profile';


const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component= {Main} name="main" options={{headerShown: false}} />
        <Stack.Screen component = {Home} name= "Home" options={{headerShown: false}}/>  
        <Stack.Screen component = {Profile} name= "Profile" />  

     </Stack.Navigator>
    </NavigationContainer>
  )

}






export default App;
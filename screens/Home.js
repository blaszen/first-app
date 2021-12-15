import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Feather from 'react-native-vector-icons/Feather';


/* */
const Home = ({navigation}) => {
    return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
       <ScrollView style={{padding:20,}}>
        <View style ={{flexDirection:'row', justifyContent:'space-between', marginBottom:20,}}>
            <Text style={{fontSize:16, color:'#14213d'}}>Chronic Formulas</Text>
            
            
            <TouchableOpacity onPress= {() => navigation.navigate('Profile')}>
            <MaterialIcons name="bookmarks" size={22} color="#000"/>
            </TouchableOpacity>
        </View>




        <View style={{
            flexDirection:'row', 
            borderColor:'#14213d',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,

            }}>
            <Feather 
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
            />
            <TextInput placeholder="Search for a dish" />
        </View>





        <View style ={{
            marginVertical: 15,
            flexDirection:'row', 
            justifyContent:'space-between', 
            marginBottom:20,}}>

            <Text style={{fontSize:18,}}>Favorites</Text>
            
            
            <TouchableOpacity onPress= {() => navigation.navigate('Profile')}>
            <Text style={{color:'#0aada8',}}> See all</Text>
            </TouchableOpacity>
        </View>

            

        </ScrollView>
       
    </SafeAreaView>
    )
  };
  

export default Home

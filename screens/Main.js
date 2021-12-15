import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import gaming from '../assets/gaming.jpg';
import fork from '../assets/fork.png';
import table from '../assets/table.jpg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Main = ({navigation}) => {
    return (
      <SafeAreaView
      style={{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
      }}
      >
  
        <View>
          <Text style={{fontSize:30, fontWeight:'bold', color:'#fff',marginTop:20,}}>  THE CHRONIC FORMULA</Text>
        </View>
  <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}> 
          <Image source={table} style={{width:300, height:300, transform:[{rotate:'0deg'}]}} />
   </View>  
        <TouchableOpacity 
        onPress= {() => navigation.navigate('Home')}
        style={{marginBottom:50, backgroundColor:'#Ad40AF', padding:20,width:'90%', borderRadius:5,flexDirection:'row',justifyContent:'space-between'}}
        
        >
          <Text style={{fontStyle:'italic',fontSize:18, }}>Let's begin</Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="#000"/>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
   
  });
  

export default Main

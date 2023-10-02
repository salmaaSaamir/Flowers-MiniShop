import React from 'react';
import { View, TouchableOpacity, Text , StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Navbar() {
    const navigation = useNavigation();
  return (
    <View style={navStyle.body}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={navStyle.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('allFlowers')}>
        <Text style={navStyle.text}>all-Flowers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('flowersInfo')}>
        <Text style={navStyle.text}>flowersInfo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={navStyle.text}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}


const navStyle = StyleSheet.create({
    body:{
        display:'flex',
        backgroundColor:'#d6ccc2',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    text:{
        textTransform:'capitalize',
        color:'#7f4f24',
    }
})
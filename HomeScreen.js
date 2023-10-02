import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import img from './assets/img9.jpg'
import React from 'react';
import  { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { Alert } from 'react-native';
export default function HomeScreen( ) {
  const navigation = useNavigation();
   const  navigateToAllFlowers = ()=>{
    navigation.navigate("allFlowers")
   }
   useEffect(()=>{
    const exiteHandler = ()=>{
        Alert.alert('Exite Page','Are You Sure To Exite This App?',[
            {
                text:'Cancle',
                onPress:()=> null,
                style:'cancel'
            },
            {
                text:'Exite',
                onPress:()=> BackHandler.exitApp(),
            },
    ]);
    return true;
    }
    const backhandler = BackHandler.addEventListener('hardwareBackPress',exiteHandler);
    return () => backhandler.remove();
  },[])
  return (
    
         <View style={styles.container} >
          
          <Text style={styles.welcomeText}>
             Hi in Our Flowers Shop , Welcome !
          </Text>
          <Image source={img}style={styles.image} resizeMode='cover'/>
          <View style={styles.btns}>
             <TouchableOpacity style={styles.button} onPress={() => navigateToAllFlowers()}>
                <Text>start discovering </Text>
             </TouchableOpacity>
      
         </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'#d6ccc2',
      marginTop:30,
      borderTopStartRadius:20,
      borderTopEndRadius:20,
    },
    header:{
      flexDirection:'row',
      justifyContent:'flex-end',
      padding:20,
      width:'100%'
    },
    welcomeText: {
      color : '#7f4f24',
      padding:20,
      margin:20,
      textAlign:'center'
    },
    image:{
      width:350 ,
      height:400,
      borderRadius:15
    },
    btns:{
      flexDirection:'row',
    },
    button:{
      margin:20,
      backgroundColor:'#fbf8cc',
      paddingHorizontal:10,
      padding:2,
      borderRadius:8,
    },
    themes:{
      marginTop:15,
      borderBottomWidth:1,
      padding:5,
      borderBottomColor:'#7f4f24',
      borderRadius:10
    }
  });

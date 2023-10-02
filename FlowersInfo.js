import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Navbar from './Navbar';
import { Data } from './data';
import { useScrollToTop } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { Alert } from 'react-native';

export default function FlowersInfo({ navigation }) {
  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);
  const handleImagePress = (index) => {
   if(index<6){
    const itemHeight = 325;
    const offset = index * itemHeight;
    flatListRef.current.scrollToOffset({ offset, animated: true });
   }else if(index>=6 && index<=20){
    const itemHeight = 330; 
    const offset = index * itemHeight;
    flatListRef.current.scrollToOffset({ offset, animated: true });
   } 
  };
  
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
    <View style={styles.content}>
      <Text style={styles.listHeader}>Flowers Information section</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity onPress={() => handleImagePress(index)}>
              <Image source={item.image} style={styles.img} />
            </TouchableOpacity>
          </View>
        )}
      />
      <FlatList
        data={Data}
        ref={flatListRef} 
        renderItem={({ item }) => (
          <View style={styles.listContent}>
            <Text style={{ color: '#c1121f'}}>
              {item.name}
            </Text>
            <Text style={styles.desc}>
              <Text style={{ color: '#4B2808'}}>Description:</Text> {item.info.description}
            </Text>
            <Text style={styles.nature}>
              <Text style={{ color: '#4B2808'}}>The nature of this flower:</Text> {item.info.nature}
            </Text>
            <Text style={styles.age}>
              <Text style={{ color: '#4B2808'}}>The average per month:</Text> {item.info.aveAge}
            </Text>
          </View>
        )}
      />
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#d6ccc2',
    marginTop: 25,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  list: {
    backgroundColor: '#d6ccc2',
    flexDirection: 'row',
    height: 180,
  },
  listHeader: {
    color: '#7f4f24',
    margin: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  listContent: {
    backgroundColor: '#ccc5b9',
    marginTop: 15,
    marginBottom: 45,
    padding: 10,
    alignContent: 'center',
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#a68a64',
  },
  desc: {
    textTransform: 'capitalize',
    margin: 10,
    color:'#7C4A1C',
      },
  nature: {
    textTransform: 'capitalize',
    margin: 10,
    color:'#7C4A1C',
      },
  age: {
    textTransform: 'capitalize',
    margin: 10,
    color:'#7C4A1C',
      },
});
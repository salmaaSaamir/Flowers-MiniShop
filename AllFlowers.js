import { StyleSheet, Text, View ,Image, TouchableOpacity, RefreshControl} from 'react-native';
import Navbar from './Navbar';
import { FlatList } from 'react-native-gesture-handler';
import { Data } from './data';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState  ,useEffect} from 'react';
import { BackHandler } from 'react-native';
import { Alert } from 'react-native';
export default function AllFlowers(navigation ){
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([{}])
  const handleRefresh = () => {
    setRefreshing(true);
    setData(apiData)
    setRefreshing(false);
  };
  const refreshControlColor = Platform.select({
    android: '#7f4f24'
  });

    const apiData = Data;
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
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            style={styles.list}
            renderItem={({item}) =>{
             return (
              <View style={styles.listBody}>
                <Image source={item.image} style={styles.img}/>
                  <Text style={styles.listText}>
                      {item.name}
                  </Text>
                  <Text style={styles.listText}> place-Of-Grow : {item.placeOfGrow}</Text>
                  <Text style={styles.listText}> smells-Like : {item.smellsLike}</Text>
                  <Text style={styles.listText}> color : <Ionicons name="md-rose-sharp" size={24} color={item.color} /></Text>
                  <TouchableOpacity >
                  {item.liked?
                  <View style={styles.likes}>
                    <AntDesign name="heart" size={24} color="#c1121f" />
                    <Text style={{margin:5}}>{item.likes}</Text> 
                  </View>
                  : 
                  <View style={styles.likes}>
                    <AntDesign name="hearto" size={24} color="black"/>
                    <Text style={{margin:5}}>{item.likes}</Text> 
                  </View>
                   }
                   
                  </TouchableOpacity>

             </View>
             );
            }}
            ListHeaderComponent={() =>{
              return (
                <View>
                 <Text style={styles.listHeader}>
                    ckeck some kind of flowers
                   </Text>
                </View>
              );
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                progressBackgroundColor={refreshControlColor}
              />
            }
             />
        <Navbar navigation={navigation} />
        </View>
    );
}


const styles = StyleSheet.create({
  content:{
    backgroundColor:'#d6ccc2',
    marginTop:25,
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    flex:1
  },
    listBody:{
      backgroundColor:'#ccc5b9',
      marginTop:15,
      marginBottom:45,
      padding:10,
      alignContent:'center',
      width:'90%',
      marginHorizontal:'5%',
      borderRadius:10,
      display:'flex',
      alignItems:'center',
      borderStyle:'dashed',
      borderWidth:2,
      borderColor:'#a68a64'
    },
    listText:{
      color:'#a68a64',
      fontWeight:'bold',
    },
    listHeader:{
      color:'#7f4f24',
      margin:40,
      textAlign:'center',
      fontWeight:'bold',
    },
    img:{
      width: 250,
      height: 250,
      borderRadius:150,
    },
    likes:{
      width:350,
      padding:5,
      flexDirection:'row',
      justifyContent:'flex-end',
    }
})
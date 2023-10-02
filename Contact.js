import { StyleSheet, Text, View , TouchableWithoutFeedback, TouchableOpacity, Alert} from 'react-native';
import Navbar from './Navbar';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
export default function Contact( ){
    const navigation = useNavigation();
    const [msg,setMsg] = useState("");
    const [name,setname] = useState("");
    const submit = ()=>{
        Alert.alert(
            'Submit Message',
            `Hi ${name} Are You Sure To Send Us That "${msg}" ?`,
            [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {
                text: 'Send',
                onPress: () => navigation.navigate('allFlowers'),
              },
            ]
          );
        
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.text}>Contact Page</Text>
            <View style={styles.formBody}>
              <TextInput
                style={styles.input}
                placeholder='Enter your name'
                keyboardType='text'
                onChangeText={(e)=>setname(e)}
              />
              <TextInput
                style={styles.input}
                placeholder='Enter your email'
                keyboardType='email-address'
              />
              
              <TextInput
                style={styles.input}
                placeholder='Enter your message'
                multiline={true}
                numberOfLines={4}
                keyboardType='text'
                onChangeText={(e)=>setMsg(e)}
              />
              <TouchableOpacity onPress={() => submit()}>
                    <Text style={styles.submit}>Contact</Text>
                </TouchableOpacity>
            </View>
          </View>
          <Navbar navigation={navigation} />
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d6ccc2',
        marginTop: 25,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    text:{
        color: '#d6ccc2',
        margin:10,
        textAlign:'center',
        fontSize:15,
    },
    form:{
        backgroundColor:'#7f4f24',
        height:150,
        marginTop:50,
        marginHorizontal:20,

    },
    formBody:{
        backgroundColor:'#d6ccc2',
        margin:40,
        borderRadius:10,
        paddingVertical:40,
    },
    input: {
        height: 40,
        margin: 20,
        borderWidth: 1,
        borderColor:'#7f4f24',
        padding: 10,
        textAlign:'center'
    },
    submit:{
        borderWidth:1,
        color:'#d6ccc2',
        borderColor:'#7f4f24',
        height: 30,
        marginVertical: 20,
        width:'40%',
        marginHorizontal:'30%',
        textAlign:'center',
        padding:5,
        backgroundColor:'#7f4f24',
        borderRadius:10,
    },
    img:{
        width:50,
        height:20
    }
})
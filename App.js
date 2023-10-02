import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AllFlowers from './AllFlowers';
import Navbar from './Navbar';
import FlowersInfo from './FlowersInfo';
import Contact from './Contact';
const AppStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    <AppStack.Screen name='Home'  component={HomeScreen} />
    <AppStack.Screen name='allFlowers'  component={AllFlowers} />
    <AppStack.Screen name='flowersInfo'  component={FlowersInfo} />
    <AppStack.Screen name='Contact'  component={Contact} />
    <AppStack.Screen name='nav'  component={Navbar} />
    </AppStack.Navigator>
    </NavigationContainer>
  );
}



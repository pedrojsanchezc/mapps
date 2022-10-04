import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import Splash from './components/screens/SplashScreen';
import PositiveVote from './components/screens/PositiveVoteScreen';
import NegativeVote from './components/screens/NegativeVoteScreen';

import { firebaseConfig } from './components/database/firebase';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import FlashMessage from 'react-native-flash-message';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync()
  .catch(console.warn);

export default () => { 

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 500);
  }, [])

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {
  return  (
      <NavigationContainer>
        <FlashMessage position="top"/>
        <Stack.Navigator>
          <Stack.Screen options = {{ headerShown: false }}  name="SplashScreen" component={Splash} />
          <Stack.Screen options = {{ headerShown: false }}  name="Login" component={LoginScreen} />
          <Stack.Screen options = {{ headerShown: false }}  name="Inicio" component={HomeScreen} /> 
          <Stack.Screen options = {{ headerShown: true }}   name="PositiveVote" component={PositiveVote} />
          <Stack.Screen options = {{ headerShown: true }}   name="NegativeVote" component={NegativeVote} />
        </Stack.Navigator>
      </NavigationContainer>
  )}      
}

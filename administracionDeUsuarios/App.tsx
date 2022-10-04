import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import React, { useEffect } from 'react';
import Splash from './components/screens/SplashScreen';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';
import AppLoading from 'expo-app-loading';
import LoadForm from './components/screens/LoadFormScreen';
import LoadList from './components/screens/LoadListScreen';

import { firebaseConfig } from './components/database/firebase';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync()
  .catch(console.warn);

export default () => { 

  let [fontsLoaded] = useFonts({
    AlfaSlabOne_400Regular,
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
      <Stack.Navigator>
        <Stack.Screen options =  {{ headerShown: false }}  name="SplashScreen" component={Splash} />
        <Stack.Screen options =  {{ headerShown: false }}  name="Login" component={LoginScreen} />
        <Stack.Screen options =  {{ headerShown: false }}  name="Inicio" component={HomeScreen} />
        <Stack.Screen options =  {{ headerShown: false }}  name="LoadForm" component={LoadForm} />
        <Stack.Screen options =  {{ headerShown: true }}  name="LoadList" component={LoadList} />
      </Stack.Navigator>
    </NavigationContainer> );
  }      
}

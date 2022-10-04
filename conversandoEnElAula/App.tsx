import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import React, { useEffect } from 'react';
import Splash from './components/screens/SplashScreen';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, PermanentMarker_400Regular } from '@expo-google-fonts/permanent-marker';
import AppLoading from 'expo-app-loading';
import ChatScreenA from './components/screens/ChatScreenA';
import ChatScreenB from './components/screens/ChatScreenB';


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
    PermanentMarker_400Regular,
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
        <Stack.Screen options =  {{ headerShown: true }}  name="ChatA" component={ChatScreenA} />
        <Stack.Screen options =  {{ headerShown: true }}  name="ChatB" component={ChatScreenB} />
      </Stack.Navigator>
    </NavigationContainer> );
  }      
}

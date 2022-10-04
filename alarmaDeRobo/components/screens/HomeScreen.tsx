import { ImageBackground, Text, TouchableOpacity, View, Image, Vibration, TextInput } from 'react-native'
import {useEffect, useState} from 'react';
import * as React from 'react'
import { auth } from '../database/firebase'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleHomeScreen'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Accelerometer } from 'expo-sensors';
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { Audio } from "expo-av";
import Toast from 'react-native-simple-toast';

const audioPlayer = new Audio.Sound();

const HomeScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const user:string = auth.currentUser?.email || ''; 
  const [password, setPassword] = useState("");
  const [start, setStart] = useState(false);
  const [position, setPosition] = useState('horizontal');
  const [sound, setSound] = useState<any>();
  const [modal, setModal] = useState(false);
  const [cord, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState<any>(null);
  const [flagImage, setFlagImage] = useState(true);
  let imageAlarm = flagImage ? require('../../assets/alarmOn.png') : require('../../assets/alarmOff.png');

  useEffect(()=>{
    Accelerometer.setUpdateInterval(700);
  },[])

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(gyroscopeData => {
        setData(gyroscopeData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    if(cord.x>0.5){
      setPosition('izquierda');
    }
    if(cord.x<-0.5){
      setPosition('derecha');
    }
    if(cord.y>0.7){
      setPosition('vertical');
    }
    if(cord.z>1){
      setPosition('horizontal');
    }
  }, [cord.x, cord.y, cord.z]);

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  async function playSound(sound: any) {     
    try {
      await audioPlayer.unloadAsync()
      await audioPlayer.loadAsync(sound);
      await audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }

  useEffect(() => {
    if(start){
      switch(position){
        case 'horizontal':
          playSound(require('../../assets/sounds/horizontal.mp3'));
          Vibration.vibrate(5000);          
          break;
        case 'izquierda':
          playSound(require('../../assets/sounds/izquierda.mp3'));          
          break;
        case 'derecha':
          playSound(require('../../assets/sounds/derecha.mp3'));
          break;          
        case 'vertical':
          playSound(require('../../assets/sounds/vertical.mp3'));
          ///Agregar Flash
          break;        
      }
    }
  }, [position])

  const handleStart = () => {
    setFlagImage(previousState => !previousState);
    if(!start){
      setStart(true);
      _subscribe();
      setModal(true);
    }else{
      setStart(false);
      _unsubscribe();
      setModal(false);
    }      
  }

  const handleEnd = async () => {
    await auth
      .signInWithEmailAndPassword(user, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        if (user) {
          setModal(false);
          setStart(false);
          handleClose();
          _unsubscribe();
          setFlagImage(previousState => !previousState);
          audioPlayer.pauseAsync();
          audioPlayer.unloadAsync();
        }
      })
      .catch((error) => {
        Toast.showWithGravity(
          "CONTRASEÑA INCORRECTA",
          Toast.LONG, 
          Toast.CENTER);
      });
    }
  
  const handleClose = () => {
    setModal(false);
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.header}>
          <View style={styles.exitSection}>
            <Text style={styles.exitText}>
              USUARIO: {auth.currentUser?.email}
            </Text>
            <TouchableOpacity style={styles.exitButton} onPress={handleSignOut}>
              <FontAwesomeIcon
                icon={faPowerOff}
                size={32}
                style={styles.faIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity onPress={handleStart}>
            <Image source={imageAlarm} style={styles.buttonImageIcon} />
          </TouchableOpacity>

          {modal ? (
            <View style={{flexDirection:'column', alignContent:'center', alignItems:'center'}} >
              
              <Text style={styles.modalText}>INGRESE SU CONTRASEÑA</Text> 
              <View style={styles.input}>
                <FontAwesomeIcon
                  style={styles.inputImage}
                  icon={faKey}
                  size={15}
                />
                <TextInput
                  placeholder="Contraseña  "
                  placeholderTextColor="#989898"
                  style={styles.textInput}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                  autoCompleteType='off'
                />                       
              </View>  
              <TouchableOpacity onPress={handleEnd} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>APAGAR ALARMA</Text>
              </TouchableOpacity>  
            </View>               
         
           ) : null}
        </View>
      </ImageBackground>
    </View>
  );
 }

 export default HomeScreen
 

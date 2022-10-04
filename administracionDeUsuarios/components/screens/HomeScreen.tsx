import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleHomeScreen'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { auth } from '../../App';

 
 const HomeScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch((error: { message: any; }) => alert(error.message))
  }

  const createUser = () => {
    navigation.replace("LoadForm")
  }

  const loadUserList = () => {
    navigation.replace("LoadList")
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle = {{opacity:0.4}}>

        <View style={ styles.exitSection }>
          <Text style={styles.exitText}>PANEL DE ADMINSITRADOR</Text>
          <TouchableOpacity style={styles.exitButton} onPress={handleSignOut}>
           <FontAwesomeIcon icon={ faPowerOff  }  size={ 32 } style={styles.faIcon}/>
          </TouchableOpacity>
        </View>

        
        <View style={styles.body}>

        <TouchableOpacity onPress={createUser} style={styles.buttonLoadData}>
          <Text style={styles.buttonText}>CARGA DE USUARIO</Text>         
        </TouchableOpacity>
        
        <TouchableOpacity onPress={loadUserList} style={styles.buttonList}>
              <Text style={styles.buttonText}>VER LISTADO DE USUARIOS</Text>         
        </TouchableOpacity>

      </View>
      </ImageBackground>
    </View>
  );
 }

 export default HomeScreen
 

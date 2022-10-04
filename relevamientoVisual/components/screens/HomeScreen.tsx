import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleHomeScreen'
import { Camera } from "expo-camera";
import { getBlob } from '../utils/utils';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import * as ImagePicker from "expo-image-picker";
import { auth, db, storage } from '../../App';
import Toast from 'react-native-simple-toast';


const HomeScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const handlePositiveVote = () => {
    navigation.replace("PositiveVote")
  }

  const handleNegativeVote = () => {
    navigation.replace("NegativeVote")
  }

  const [imageType, setImageType] = useState( { category: "" })
  const initialRender = useRef(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
        await Camera.requestCameraPermissionsAsync();
    })();
  }, []);

  const dateComponentPad = (value: string) => {
    var format = value;
    return format.length < 2 ? '0' + format : format;
  }

  const formatDate = (date: any) => {
    let datePart = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(dateComponentPad);
    let timePart = [date.getHours(), date.getMinutes(), date.getSeconds()].map(dateComponentPad);
    return datePart.join('-') + ' ' + timePart.join(':');
  }

  const uploadImage = async (image) => {      
      setLoading(true);
      try {
        const blob: any = await getBlob(image);
        const fileName = image.substring(image.lastIndexOf("/") + 1);
        const fileRef = ref(storage, "relevamientoVisual/" + fileName);
        await uploadBytes(fileRef, blob);
        await addDoc(collection(db, "relevamientoVisual"), {
          user: auth.currentUser?.email,
          votes: [],
          type: imageType.category,
          date: formatDate(new Date()),
          creationDate: new Date(),
          image: fileRef.fullPath,
        });
        
        await blob.close();
      } catch (e) {
        console.log(e);
        Toast.showWithGravity(
          "Error al subir la imagen",
          Toast.LONG, 
          Toast.TOP);        
      } finally {
        setLoading(false);
      }
  };

  const handleCamera = (type) => { 
    setImageType({ category: type });
  };
 
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      savePhoto();
    }    
  },[imageType]);
    
  const savePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      Toast.showWithGravity(
        "Imagen cargada exitosamente",
        Toast.SHORT, 
        Toast.CENTER);
      await uploadImage(result["uri"]);
    }    
  };  
  
  return (
    <View style={styles.container}>
      {loading}
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={styles.body}>
        
          <View style={styles.exitSection}>
            <Text style={styles.exitText}>
              USUARIO: {auth.currentUser?.email}
            </Text>
            <TouchableOpacity style={styles.exitButton} onPress={handleSignOut}>
              <Image source={require("../../assets/logout.png")} style={styles.buttonImageExit} />
            </TouchableOpacity>
          </View>
        

          <View style={{ flexDirection: "row" }}>

            <TouchableOpacity onPress = { () => handleCamera("positive") } style={styles.buttonMain}>
              <Image source={require("../../assets/positive-vote.png")} style={styles.buttonImageMain} />
              <Text style={styles.buttonText}>CARGAR COSAS POSITIVAS</Text>
              <Image source={require("../../assets/camera.png")} style={styles.buttonImageVote}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = { () => handleCamera("negative") } style={styles.buttonMain}>
              <Image source={require("../../assets/negative-vote.png")} style={styles.buttonImageMain} />
              <Text style={styles.buttonText}>CARGAR COSAS NEGATIVAS</Text>
              <Image source={require("../../assets/camera.png")} style={styles.buttonImageVote}/>
            </TouchableOpacity>

          </View>

          <TouchableOpacity onPress = { handlePositiveVote } style={styles.buttonVote}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
              <Image source={require("../../assets/positive-vote.png")} style={styles.buttonImageVote} />
              <Text style={styles.buttonText}>LISTA DE COSAS POSITIVAS</Text>              
            </View>
          </TouchableOpacity> 

          <TouchableOpacity onPress = { handleNegativeVote } style={styles.buttonVote}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
              <Image source={require("../../assets/negative-vote.png")} style={styles.buttonImageVote} />
              <Text style={styles.buttonText}>LISTA DE COSAS NEGATIVAS</Text>              
            </View>
          </TouchableOpacity>         

        </View>
      </ImageBackground>
    </View>
  );
 }

 export default HomeScreen
 

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ActivityIndicator } from "react-native";
import styles from "../styles/StyleFormScreen";
import Modal from "react-native-modal";

import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-simple-toast';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../../App";
import { getBlob } from "../utils/utils";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";


type NewUser = {
  apellido:string;
  nombre:string;
  dni:string;
  email:string;
  password:string;
  confirmPassword:string;
}

const LoadForm = () => {
  const [apellidoForm, setApellido] = useState("Apellido");
  const [nombreForm, setNombre] = useState("Nombre");
  const [dniForm, setDni] = useState("DNI");
  const [emailForm, setEmail] = useState("Correro Electrónico");
  const [passwordForm, setPassword] = useState("Contraseña");
  const [confirmPasswordForm, setConfirmPassword] = useState("Confirmar Contraseña");
  const [scanned, setScanned] = useState(false);
  const [openQR, setOpenQR] = useState(false);
  const {control, handleSubmit, getValues, formState:{errors}, reset, setValue} = useForm<NewUser>();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholderColor, setPlaceholderColor] = useState("grey");

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleReturn = () => {
    navigation.replace("Inicio")
  }

  useEffect(() => {
    (async () => {
        await Camera.requestCameraPermissionsAsync();
        await BarCodeScanner.requestPermissionsAsync();
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setOpenQR(false);
    const dataSplit = data.split('@');
    const dni = dataSplit[4].trim();
    const nombre = dataSplit[2].trim();
    const apellido = dataSplit[1].trim();
    setValue("dni",dni);
    setValue("nombre",nombre);
    setValue("apellido",apellido);
    setApellido(apellido);
    setNombre(nombre);
    setDni(dni);
    setPlaceholderColor("black");
    console.log(dni);
    console.log(nombre);
    console.log(apellido);
  };

  const handleOpenQR = () => {
    setScanned(false);
    setOpenQR(true);
  }

  const onSubmit = async () => {
    const values=getValues();
    let error=false;
    Object.values(values).map(value=>{
      if(!value){
        error=true;
        return;
      }
    })
    if(error){
      Toast.showWithGravity(
        "Todos los campos son requeridos",
        Toast.LONG, 
        Toast.CENTER);
      return;
    }
    if(!image){
      Toast.showWithGravity(
        "Debe tomar una foto",
        Toast.LONG, 
        Toast.CENTER);
      return;
    }
    if(values.password!==values.confirmPassword){
      Toast.showWithGravity(
        "Las contraseñas no coinciden",
        Toast.LONG, 
        Toast.CENTER);
    }
    setLoading(true)
    toggleSpinnerAlert();
    try {
      await createUserWithEmailAndPassword(auth,values.email,values.email);
      const blob:any = await getBlob(image);
      const fileName = image.substring(image.lastIndexOf("/") + 1);
      const fileRef = ref(storage, "administracionUsuarios/" + fileName);
      await uploadBytes(fileRef, blob);
      await addDoc(collection(db, "administracionUsuarios"), {
        lastName:values.apellido,
        name:values.nombre,
        dni:values.dni,
        email:values.email,
        image:fileRef.fullPath,
        creationDate:new Date()
      });
      
      Toast.showWithGravity(
        "Usuario creado exitosamente",
        Toast.LONG, 
        Toast.CENTER);      
    reset();
    setImage("");
    } catch (error:any) {
      Toast.showWithGravity(
        "Usuario ya existente",
        Toast.LONG, 
        Toast.CENTER); 
    }finally{
      setLoading(false);
      resetForm();
    }
  }

  const resetForm = () => {
    setPlaceholderColor("grey");
    setApellido("Apellido");
    setNombre("Nombre");
    setDni("DNI");
    setEmail('Correo Electrónico');
    setPassword('Contraseña');
    setConfirmPassword('Confirmar Contraseña');
    setValue("dni",'');
    setValue("nombre",'');
    setValue("apellido",'');
    setValue("email",'');
    setValue("password",'');
    setValue("confirmPassword",'');
    setImage("");
  }

  const handleCamera = async (type) => {
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
    });
    if (!result.cancelled) {
      setImage(result["uri"]);
    }
  };

  const [isModalSpinnerVisible, setModalSpinnerVisible] = useState(false);

  const toggleSpinnerAlert = () => {
    setModalSpinnerVisible(true);
    setTimeout(() => {
      setModalSpinnerVisible(false);
    }, 4000);
  };

  return (
    !openQR ?
    <View style={styles.container}>
      
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle = {{opacity:0.3}}>        
        {loading}
        <View style={styles.exitSection}>
          <TouchableOpacity style={styles.exitButton} onPress={handleReturn}>
            <Image
              source={require("../../assets/return.png")}
              style={styles.buttonImageExit}
            />
          </TouchableOpacity>
          <Text style={styles.exitText}>
            CARGA DE USUARIO
          </Text>
        </View>
        
         

        <View style={styles.body}> 
          <View style={{
            flexDirection: 'row', 
            alignContent: 'center', 
            justifyContent: 'center', 
            marginBottom: 20}}>
            {!image?
              <TouchableOpacity onPress={handleCamera}>
                <Image 
                  style={{height:150, width:150, borderRadius:20, margin:10}} 
                  resizeMode="cover" 
                  source={require("../../assets/camera.png")}
                />
              </TouchableOpacity>:
              <View>
                <Image style={{height:150, width:150, borderRadius:20, margin:10}} resizeMode="cover" source={{uri:image}}/>
              </View>
            }

            <TouchableOpacity onPress={handleOpenQR}>
              <Image 
                  style={{height:150, width:150, borderRadius:20, margin:10}} 
                  resizeMode="cover" 
                source={require("../../assets/qr.png")}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <TextInput
                placeholder= {apellidoForm}
                placeholderTextColor= {placeholderColor}
                style={styles.textInput}
                onChangeText={(text) => setValue("apellido",text)}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder={nombreForm}
                placeholderTextColor= {placeholderColor}
                style={styles.textInput}
                onChangeText={(text) => setValue("nombre",text)}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder={dniForm}
                placeholderTextColor= {placeholderColor}
                style={styles.textInput}
                keyboardType={'numeric'}
                onChangeText={(text) => setValue("dni",text)}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder= {emailForm}
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setValue("email",text)}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder= {passwordForm}
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setValue("password",text)}
                secureTextEntry = {true}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholder= {confirmPasswordForm}
                placeholderTextColor="grey"
                style={styles.textInput}
                onChangeText={(text) => setValue("confirmPassword",text)}
                secureTextEntry = {true}
              />
            </View>
          </View>

          <TouchableOpacity onPress={onSubmit} style={styles.buttonList}>
              <Text style={styles.buttonText}>CARGAR USUARIO</Text>         
          </TouchableOpacity>
      </View> 

      <View>
        <Modal isVisible={isModalSpinnerVisible}>
          <ActivityIndicator size="large" color="#A4C3B2" />
        </Modal>
      </View>
         
      </ImageBackground>
    </View> : <BarCodeScanner
                  onBarCodeScanned={scanned && openQR ? undefined : handleBarCodeScanned}
                  style={StyleSheet.absoluteFillObject} />
  );
}

                

export default LoadForm;

import { useNavigation  } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import HideWithKeyboard from 'react-native-hide-with-keyboard'
import styles from '../styles/StyleLoginScreen'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimesCircle, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-native-modal";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../App'

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isModalAlertVisible, setModalAlertVisible] = useState(false);
  const [isModalSpinnerVisible, setModalSpinnerVisible] = useState(false);

  const win = Dimensions.get('window');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const toggleModalAlert = () => {
    setModalAlertVisible(!isModalAlertVisible);
  };

  const toggleSpinnerAlert = () => {
    setModalSpinnerVisible(true);
    setTimeout(() => {
      setModalSpinnerVisible(false);
      setModalAlertVisible(true);
    }, 1200);
  };  

  const onPressAdminHandler = () => {
    setEmail("administrador@admin.com");
    setPassword("admin123");
  }

  const onPressTeacherHandler = () => {
    setEmail("control@admin.com");
    setPassword("control123");
  }

  const onPressStudentHandler = () => {
    setEmail("votante@mail.com");
    setPassword("votante123");
  }

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(user => {
      if (user){
        navigation.replace('Inicio')
      }
    })
    return unsuscribe
  }, [])

  const handelSignUp = async () => {
    await createUserWithEmailAndPassword(auth,email, password)
          .then((userCredentials: { user: any }) => {
            const user = userCredentials.user;
            console.log('Registro de usuario como: ', user?.email);        
      })
      .catch(error => {
        toggleSpinnerAlert();  
        switch (error.code) {  
            case 'auth/invalid-email':
              setErrorMsg('Formato de correo electrónico incorrecto.');
              break;                       
            case 'auth/email-already-in-use':
              setErrorMsg('El correo electrónico ingresado ya está registrado.');
              break;                    
            case 'auth/missing-email':
              setErrorMsg('Ingrese el correo electrónico.');
              break; 
            case 'auth/internal-error':
              setErrorMsg('Ingrese la contraseña.');
              break;
            default:
              setErrorMsg('La contraseña debe tener más de 6 caracteres');
              break;   
        }
    })
  }

  const handleLogin = async () => {
      await signInWithEmailAndPassword(auth,email, password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log('Inicio de sesion como: ', user?.email);
        if (user){
          navigation.replace('Inicio')
        }
      })
      .catch(error => { 
        toggleSpinnerAlert();  
         switch (error.code) { 
            case 'auth/invalid-email':
              setErrorMsg('Formato de correo electrónico incorrecto.');
              break;                   
            case 'auth/user-not-found':
              setErrorMsg('Usuario no registrado.');
              break;                 
            case 'auth/wrong-password':
              setErrorMsg('Contraseña incorrecta.');
              break;
            case 'auth/internal-error':
              setErrorMsg('Ingrese contraseña.');
              break;;
            default:
                alert(error.message)  
                break; 
        }
    }) 
  } 

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle = {{opacity:0.4}}>
      <View style={styles.body}>
        <View style={{ flexDirection: "row" , justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>RELEVAMIENTO</Text>
            <Text style={styles.title}>VISUAL</Text>
          </View>
          <Image
              style={{
                width: win.width / 3,
                height: win.width / 3,
                resizeMode: "contain",
                alignSelf: "center",
                marginBottom: 5,
              }}
              source={require("../../assets/logo.png")}
            />
        </View>

        <View style={styles.inputContainer}>

          <View style={styles.input}>
            <FontAwesomeIcon style={styles.inputImage} icon={ faEnvelope }  size={ 15 } />
            <TextInput
              placeholder="Correo Electrónico"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.input}>
            <FontAwesomeIcon style={styles.inputImage} icon={ faKey }  size={ 15 } />
            <TextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
        </View>

        
            <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
              <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handelSignUp} style={styles.buttonRegister}>
              <Text style={styles.buttonText}>REGISTRARSE</Text>
            </TouchableOpacity>

          <TouchableOpacity onPress={onPressAdminHandler}  style={styles.buttonRole} >
            <View style={{ flexDirection: "row" , alignItems: 'center',}}>
              <Text style={styles.roleText}> ADMINISTRADOR</Text>
            </View>        
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressTeacherHandler} style={styles.buttonRole}>
          <View style={{ flexDirection: "row" , alignItems: 'center',}}>
              <Text style={styles.roleText}> CONTROL</Text>
            </View>     
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressStudentHandler} style={styles.buttonRole}>
          <View style={{ flexDirection: "row" , alignItems: 'center',}}>
              <Text style={styles.roleText}> VOTANTE</Text>
            </View>   
          </TouchableOpacity>
      </View>   

      <View style={styles.footer}>
        <HideWithKeyboard>
          <Text style={styles.footerText}>
            &copy; {new Date().getFullYear()}  - SINNOTT SEGURA GONZALO
          </Text>
        </HideWithKeyboard>

        <View>
            <Modal isVisible={isModalAlertVisible}>
              <View style={styles.modalContainer}>
                <ImageBackground
                  source={require("../../assets/background.png")}
                  resizeMode="cover"
                  borderRadius={25}
                  style={styles.image}
                  imageStyle = {{opacity:0.6}}
                  >

                  <View style={styles.modalBody}>
                    <Text style={styles.modalText}>{errorMsg}</Text>
                    <TouchableOpacity
                      onPress={toggleModalAlert}
                      style={styles.escapeButton}
                    >
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        size={40}
                        style={styles.faIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </Modal>
          </View>

        <View>
          <Modal isVisible={isModalSpinnerVisible}>
            <ActivityIndicator size="large" color="3c8e99" />
          </Modal>
        </View>

      </View>
      </ImageBackground>  
    </View>
  );
}

export default LoginScreen
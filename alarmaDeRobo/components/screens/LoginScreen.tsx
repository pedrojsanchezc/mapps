import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import { auth } from "../database/firebase";
import styles from "../styles/StyleLoginScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserGear,
  faUserLock,
  faUser,
  faTimesCircle,
  faKey,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-native-modal";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalAlertVisible, setModalAlertVisible] = useState(false);
  const [isModalSpinnerVisible, setModalSpinnerVisible] = useState(false);

  const win = Dimensions.get("window");
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
  };

  const onPressTeacherHandler = () => {
    setEmail("usuario@mail.com");
    setPassword("usuario123");
  };

  const onPressStudentHandler = () => {
    setEmail("tecnico@admin.com");
    setPassword("tecnico123");
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Inicio");
      }
    });
    return unsuscribe;
  }, []);

  const handelSignUp = async () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registro de usuario como: ", user?.email);
      })
      .catch((error) => {
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
      });
  };

  const handleLogin = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Inicio de sesion como: ", user?.email);
        if (user) {
          navigation.replace("Inicio");
        }
      })
      .catch((error) => {
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
      });
  };

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle = {{opacity:0.5}}>
        <View style={styles.body}>
        <Text style={styles.title}>ALARMA ANTI ROBO</Text>
        <Image
          style={{
            width: win.width / 3,
            height: win.width / 3,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={require("../../assets/logo.png")}
        />

          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <FontAwesomeIcon
                style={styles.inputImage}
                icon={faEnvelope}
                size={15}
              />
              <TextInput
                placeholder="Correo Electrónico "
                placeholderTextColor="#989898"
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

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
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
              <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handelSignUp}
              style={styles.buttonRegister}
            >
              <Text style={styles.buttonText}>REGISTRARSE</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={onPressAdminHandler}
                style={styles.buttonRole}
              >
                <FontAwesomeIcon
                  icon={faUserLock}
                  size={32}
                  style={styles.faIcon}
                />
              </TouchableOpacity>
              <Text style={styles.roleText}>ADMINISTRADOR</Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={onPressTeacherHandler}
                style={styles.buttonRole}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  size={32}
                  style={styles.faIcon}
                />
              </TouchableOpacity>
              <Text style={styles.roleText}>USUARIO</Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={onPressStudentHandler}
                style={styles.buttonRole}
              >
                <FontAwesomeIcon
                  icon={faUserGear}
                  size={32}
                  style={styles.faIcon}
                />
              </TouchableOpacity>
              <Text style={styles.roleText}>TÉCNICO</Text>
            </View>
          </View>

        </View>

        <View style={styles.footer}>
          <HideWithKeyboard>
            <Text style={styles.footerText}>
              &copy; {new Date().getFullYear()} - PEDRO SANCHEZ
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
                  imageStyle = {{opacity:0.6}}>
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
              <ActivityIndicator size="large" color="#A4C3B2" />
            </Modal>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

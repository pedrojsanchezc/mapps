import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "../styles/StyleLoginScreen";

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const win = Dimensions.get("window");

  setTimeout(() => {
    navigation.replace("Login");
  }, 3000);

  return (
    <View style={{ flex:1, backgroundColor: "#f2e7db"}}>
      <ImageBackground
        source={require("../../assets/splash.gif")}
        resizeMode="cover"
        style={styles.image}
      >
               </ImageBackground>
                    
    </View>
  );
};
export default SplashScreen


import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Splash() {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const win = Dimensions.get('window');

    setTimeout(() => {
        navigation.replace( 'Login' );
        }, 2800);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <ImageBackground style={{width: win.width ,
                              height: win.width ,
                              alignSelf: "center",}}  
                        source={require("C:\Users\pjsanchez\Desktop\PPS-UTN\apps_pps\00-Login\assets\splash.gif")} /> */}
    </View>
  );
}

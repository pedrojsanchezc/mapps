import { ImageBackground, Text, TouchableOpacity, View, Image, ActivityIndicator, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import styles from '../styles/StyleListScreen'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'
import { auth, db, storage } from '../../App';
import Modal from "react-native-modal";


const LoadList = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [isModalSpinnerVisible, setModalSpinnerVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  const handleReturn = () => {
    if (auth.currentUser?.email == "administrador@admin.com") {
      navigation.replace("Inicio");
    }
    else {
      auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
    }
  }

  useFocusEffect(
      useCallback(() => {
          getDocuments();
          toggleSpinnerAlert();
  }, []))

  const toggleSpinnerAlert = () => {
    setModalSpinnerVisible(true);
    setTimeout(() => {
      setModalSpinnerVisible(false);
    }, 3500);
  };

  const getDocuments = async () => {
    setLoading(true);
    setData([]);
        try {
            const querySnapshot = await (await getDocs(query(collection(db, "administracionUsuarios"), orderBy('lastName', 'asc'), orderBy('name', 'asc'))));  

            querySnapshot.forEach(async (doc) => {
                const res:any = {...doc.data(), id:doc.id};
                const imageUrl = await getDownloadURL(ref(storage, res.image));
                setData(arr => [...arr, {...res, imageUrl: imageUrl}]);
            });
        } catch (error) {
            console.log(error)                    
        }finally{
            setLoading(false);
        }
  };

  
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.exitButton} onPress={handleReturn}>
            <Image
              source={require("../../assets/return.png")}
              style={styles.buttonImageExit}
            />
          </TouchableOpacity>
     ),
      headerTitle: () => (
        <Text style={styles.exitText}>LISTA DE USUARIOS</Text>
      ),
      headerTintColor: "transparent",
      headerBackButtonMenuEnabled: false,
      headerStyle: {
        backgroundColor: 'rgba(168, 229, 128, 0.8);',
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading}
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.2 }}>
        
        <View style={styles.body}>
          <ScrollView>
          {data.map((item) => (               
              <View style={styles.cardStyle}>
                <Image resizeMode='cover' style={{ flex: 1, borderRadius: 10 }} source={{ uri: item.imageUrl }} />
                <View style={{ padding: 10, justifyContent: 'space-between', height: 100 }}>
                  <View>
                    <Text style={styles.tableHeaderText}>{item.lastName} {item.name}</Text>
                    <Text style={styles.tableCellText}>DNI: {item.dni}</Text>
                    <Text style={styles.tableCellText}>Correo Electrónico: {item.email}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>           
        </View>
                
        <View>
          <Modal isVisible={isModalSpinnerVisible}>
            <ActivityIndicator size="large" color="3c8e99" />
          </Modal>
        </View>

      </ImageBackground>
    </View>
  );
 }
 export default LoadList
 
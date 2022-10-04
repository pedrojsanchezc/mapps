import { ImageBackground, Text, TouchableOpacity, View, Image, ActivityIndicator, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import styles from '../styles/StyleVoteScreen'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { collection, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'
import { auth, db, storage } from '../../App';
import { format } from 'date-fns'
import { splitUserFromEmail } from '../utils/utils';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-simple-toast';

const NegativeVote = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [votes, setVotes] = useState<any>([]);
  const [isModalSpinnerVisible, setModalSpinnerVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  const handleReturn = () => {
      navigation.replace("Inicio")
      }

  useEffect(() => {
        const actualVotes = Object.values(votes);        
    },[votes])

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
          const querySnapshot = await (await getDocs(query(collection(db, "relevamientoVisual"), orderBy('date', 'desc'), orderBy('creationDate', 'desc'))));    

          querySnapshot.forEach(async (doc) => {
            if (doc.data().type === 'negative') {
              const res: any = { ...doc.data(), id: doc.id };
              const imageUrl = await getDownloadURL(ref(storage, res.image));
              const voted = res.votes.some((vote: any) => vote === auth?.currentUser?.email);
              let countLike = doc.data().votes.length;
              setData((arr: any) => [...arr, { ...res, id: doc.id, imageUrl: imageUrl, voted, countLike }].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)));
            }
          });
        } catch (error) {
            console.log(error)                    
        }finally{
            setLoading(false);
        }
        console.log(data.length);        
  }

  const handleVote = async (id: string) => {
    try {
        const ref = doc(db, "relevamientoVisual", id);
        const document = await getDoc(ref);
        const documentVotes = document.data()?.votes;
        const userVoted = documentVotes.find(email => email === auth.currentUser?.email);
        let newVotes;
        let countVote = document.data()?.votes.length;
        if(userVoted){
            newVotes = documentVotes.filter(email => email !== auth.currentUser?.email);
            countVote--;
            Toast.showWithGravity(
              "Ya no te gusta la imagen",
              Toast.SHORT, 
              Toast.CENTER); 
          }else{
            newVotes = [...documentVotes, auth.currentUser?.email];
            countVote++;
            Toast.showWithGravity(
              "Te gusta la imagen",
              Toast.SHORT, 
              Toast.CENTER); 
        }
        setData((arr: any) => 
          arr.map((item: any) => item.id === id ?  
          { ...item, voted: !item.voted } : item ));
        setData((arr: any) => arr.map((item: any) => 
          item.id === id ? 
          { ...item, countLike: countVote } : item )); 
        await updateDoc(ref, {votes:newVotes})  
    } catch (error) {
        console.log(error)
    } finally{
        setLoading(false);
    }
  } 
  
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
        <Text style={styles.exitText}>LISTADO COSAS NEGATIVAS</Text>
      ),
      headerTintColor: "transparent",
      headerBackButtonMenuEnabled: false,
      headerStyle: {
        backgroundColor: '#3c8e99',
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
          {data.map((item: { imageUrl: any; countLike: any; user: any | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; creationDate: { toDate: () => Date; }; votes: string | any[]; voted: any; id: string; }) => (
                
                
              <View style={styles.cardStyle}>
                <Image resizeMode='cover' style={{ flex: 1, borderRadius: 10 }} source={{ uri: item.imageUrl }} />
                <View style={{ padding: 10, justifyContent: 'space-between', height: 100 }}>
                  <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.tableHeaderText}>{splitUserFromEmail(item.user)}</Text>
                      {item.voted ?
                        <TouchableOpacity onPress={() => handleVote(item.id)}>
                          <AntDesign name={'like1'} size={30} color="#05668D" /></TouchableOpacity> :
                        <TouchableOpacity onPress={() => handleVote(item.id)}>
                          <AntDesign name={'like2'} size={30} color="#05668D" /></TouchableOpacity>
                      }
                    </View>
                    <Text style={styles.tableCellText}>{item.countLike} VOTOS</Text>
                    <Text style={styles.tableCellText}>{format(item.creationDate.toDate(), 'dd/MM/yyyy HH:mm:ss')} hs</Text>
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
 export default NegativeVote
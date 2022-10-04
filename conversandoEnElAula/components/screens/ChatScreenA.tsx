import { Text, TouchableOpacity, Image, View } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/StyleChatScreen'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../../App';
import { GiftedChat, Send } from 'react-native-gifted-chat';


const ChatA = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [messages, setMessages] = useState([]);
  const user = auth?.currentUser?.email || '';

  const splitUserFromEmail = (email:string) => {
    const emailUser = email.split('@')[0];
    return emailUser.charAt(0).toUpperCase() + emailUser.slice(1)
}

  useLayoutEffect(() => {
      const unsubscribe = onSnapshot(query(collection(db, "chatA"), orderBy("createdAt", "desc")), (snapshot =>
          setMessages(snapshot.docs.map(doc => ({
              _id: doc.data()._id,
              text: doc.data().text,
              createdAt: doc.data().createdAt.toDate(),
              user: doc.data().user
          })))
      ))
      return unsubscribe;
  }, [])

  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages))
      const {
          _id,
          createdAt,
          text,
          user } = messages[0]
      addDoc(collection(db, "chatA"), {
          _id,
          createdAt,
          text,
          user
      });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity style={styles.exitButton} onPress={handleReturn}>
              <Image source={require("../../assets/return.png")} style={styles.buttonImageExit} />
            </TouchableOpacity>
          ),
          headerTitle: () => (

            <Text style={styles.exitText}>SALA DE CONVERSACIÓN A</Text>
            ),
          headerTintColor: "#43cb8e",
          headerBackButtonMenuEnabled: false,
          headerStyle: {
              backgroundColor: '#43cb8e',  
          }
      });
  }, []);

  const handleReturn = () => {
    navigation.replace("Inicio")
    }

    

return ( 
    <GiftedChat  
        messagesContainerStyle={{ backgroundColor: '#43cb8e', borderColor: '#43cb8e', shadowColor: '#43cb8e' }}
        optionTintColor='#optionTintColor'
        messages={messages}
        onSend={messages => onSend(messages)}
        renderUsernameOnMessage={true}
        renderAvatarOnTop={true}
        maxInputLength={21}
        alwaysShowSend = {true}
        user={{
            _id: auth?.currentUser?.email || 1,
            name: splitUserFromEmail(user) || '',
        }}
        textInputProps={{                      
            borderColor: '#222', 
            placeholder:"Mensaje...",                    
            
        }}
        renderSend={props => (
            <Send {...props} >
                <View style={{marginRight: 10, marginBottom: 5}}>
                    <Image style = {{height:35, width:35}} source={require('../../assets/send.png')} resizeMode={'center'}/>
                </View>
        </Send> )}
    />     
);}

export default ChatA
 

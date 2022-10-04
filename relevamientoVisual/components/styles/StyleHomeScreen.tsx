import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c8e99'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  buttonMain: {
    backgroundColor: '#F0F2EF',
    borderColor: '#AFD5AA',
    margin: 5,
    marginTop: 10,
    width: '40%',
    height: '85%',
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonVote: {
    backgroundColor: '#AFD5AA',
    borderColor: '#F0F2EF',
    margin: 5,
    width: '90%',
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
  buttonText: {
    color: '#5C5346',
    fontSize: 35,
    fontFamily: 'BebasNeue_400Regular',
    textAlign: 'center',
  },
  exitSection: {
    width: '90%',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exitText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'BebasNeue_400Regular',
    textAlign: 'center',
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    margin: 5,
    marginLeft: 60,
    width: '30%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonImageMain: {
    padding: 10,
    margin: 5,
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  buttonImageVote: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  buttonImageExit: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  }
});




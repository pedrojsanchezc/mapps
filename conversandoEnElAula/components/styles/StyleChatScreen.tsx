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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'PermanentMarker_400Regular',
  },
  exitSection: {
    width: '90%',
    alignItems: 'center',
    flexDirection: "row",
    marginTop: 10
  },
  exitText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'PermanentMarker_400Regular',
    textAlign: 'center',

  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: '30%',
    padding: 15,
    marginRight: 60,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonMain: {
    backgroundColor: ' rgba(194, 248, 203, 0.5);',
    borderLeftColor: 'black',
    borderLeftWidth: 4,
    borderTopColor: 'black',
    borderTopWidth: 4,
    borderRadius: 5,
    marginTop: 40,
    marginBottom: 60,
    margin: 5,
    width: '40%',
    height: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImageExit: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  buttonImageMain: {
    padding: 10,
    margin: 5,
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  inputText: {
    backgroundColor: ' rgba(194, 248, 203, 0.5);',
    borderLeftColor: 'black',
    borderLeftWidth: 4,
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    borderRadius: 5,
    alignItems: 'flex-start',
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  chatHistory: {
    backgroundColor: ' rgba(194, 248, 203, 0.5);',
    borderLeftColor: 'black',
    borderLeftWidth: 4,
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '80%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
});




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
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
        
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    margin: 5,
    width: '30%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'PermanentMarker_400Regular',
  },
  exitSection: {
    width: '90%',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  exitText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'PermanentMarker_400Regular',
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    margin: 5,
    width: '25%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonImageIcon: {
    height: 280,
    width: 280,
    resizeMode: 'contain',
    marginBottom: 100,
    
    
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  faIcon: {
    color: 'white',
  },
  modalContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  modalBody: {
    borderColor: 'white',
    borderWidth: 2,
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  modalText: {
    fontFamily: 'PermanentMarker_400Regular',
    fontSize: 18,
    color: '#F0F2EF',
  },
  escapeButton: {
    backgroundColor: '#545454',
    width: '25%',
    padding: 15,
    borderColor: '#AFD5AA',
    borderWidth: 0,
    borderRadius: 25,
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: '#AFD5AA',
    borderBottomWidth: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  inputImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    color: '#CCE3DE',
  },
  textInput: {
    color: 'white',
    fontFamily: 'PermanentMarker_400Regular',
    fontSize: 18,
  },
  buttonStyle: {
    backgroundColor: '#A4C3B2',
    borderColor: '#A4C3B2',
    marginTop: 60,
    margin: 5,
    width: 180,
    height: 60,
    padding: 15,
    borderRadius: 30,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
});




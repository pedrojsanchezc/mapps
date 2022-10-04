import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c8e99'    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  inputContainer: {
    width: '80%',      
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
  buttonLogin: {
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
  buttonRegister: {
    backgroundColor: '#F0F2EF',
    borderColor: '#F0F2EF',
    marginTop:60,
    margin: 5,
    width: 180,
    height: 60,
    padding: 15,
    borderRadius: 100,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRole: {
    backgroundColor: '#333333',
    borderColor: '#333333',
    marginTop: 60,
    margin: 20,
    width: 100,
    height: 100,
    padding: 15,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    color: '#545454',
    fontSize: 16,
    fontFamily: 'PermanentMarker_400Regular',
    
  },
  roleText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'PermanentMarker_400Regular',
  },
  footerText: {
    color: '#A4C3B2',
    fontSize: 20,
    fontFamily: 'PermanentMarker_400Regular',
  },
  title: {
    fontSize: 30,
    marginTop: 50,
    color: "#A4C3B2",
    fontFamily: 'PermanentMarker_400Regular',
  },
  textInput: {
    color: 'white',
    fontFamily: 'PermanentMarker_400Regular',
    fontSize: 18,
  },
  body: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
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
    flexShrink: 1,
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
  faIcon: {
    color: '#CCE3DE',
  }
});




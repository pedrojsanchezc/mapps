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
    backgroundColor: ' rgba(24, 2, 12, 0.5);',
    borderLeftColor: '#E5FFDE',
    borderLeftWidth: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
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
    backgroundColor: ' rgba(131, 133, 140, 0.8);',
    borderLeftColor: '#05153F',
    borderLeftWidth: 10,
    borderRadius: 10,
    marginTop: 60,
    margin: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  buttonRegister: {
    backgroundColor: ' rgba(131, 133, 140, 0.8);',
    borderLeftColor: '#05153F',
    borderLeftWidth: 10,
    borderRadius: 10,
    marginTop: 60,
    margin: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRole: {
    backgroundColor: ' rgba(168, 229, 128, 0.8);',
    borderLeftColor: '#F2C335',
    borderLeftWidth: 10,
    borderRadius: 10,
    marginTop: 10,
    margin: 5,
    padding: 15,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  roleText: {
    color: '#343434',
    fontSize: 20,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  footerText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  title: { 
    fontSize: 20,    
    color: "#764134",
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  textInput: {
    color: '#18020C',
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
    width: '100%',
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
    backgroundColor: ' rgba(24, 2, 12, 0.5);',
    borderLeftColor: '#F2C335',
    borderLeftWidth: 10,
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  modalText: {
    flexShrink: 1,
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 18,
    color: '#F0FFF1',
  },
  escapeButton: {
    backgroundColor: 'transparent',
    width: '25%',
    padding: 15,
    borderColor: '#AFD5AA',
    borderWidth: 0,
    borderRadius: 25,
    alignItems: 'center',
  },
  faIcon: {
    color: '#F0FFF1',
  }
});




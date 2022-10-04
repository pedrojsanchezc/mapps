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
    backgroundColor: '#F0F2EF',
    borderBottomColor: '#AFD5AA',
    borderBottomWidth: 5,
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
    color: '#5C5346',
  },
  buttonLogin: {
    backgroundColor: '#AFD5AA',
    borderColor: '#F0F2EF',
    marginTop: 20,
    margin: 5,
    width: '40%',
    padding: 15,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  buttonRegister: {
    backgroundColor: '#F0F2EF',
    borderColor: '#AFD5AA',
    marginTop:20,
    margin: 5,
    width: '40%',
    padding: 15,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRole: {
    backgroundColor: '#AFD5AA',
    borderColor: '#F0F2EF',
    marginTop: 10,
    margin: 5,
    width: '80%',
    padding: 15,
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: {
    color: '#5C5346',
    fontSize: 20,
    fontFamily: 'BebasNeue_400Regular',
  },
  roleText: {
    color: '#5C5346',
    fontSize: 20,
    fontFamily: 'BebasNeue_400Regular',
  },
  footerText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'BebasNeue_400Regular',
  },
  title: {
    fontSize: 50,
    marginBottom: 5,
    color: "#5C5346",
    fontFamily: 'BebasNeue_400Regular',
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
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 18,
    color: 'black',
  },
  escapeButton: {
    backgroundColor: '#F0F2EF',
    width: '25%',
    padding: 15,
    borderColor: '#AFD5AA',
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
  },
  faIcon: {
    color: '#C0A19B',
  }
});




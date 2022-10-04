import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,    
  },
  image: {
    flex: 1,
    justifyContent: "center"
    
  },
  imageModal: {
    flex: 1,
    justifyContent: "center"
  },
  inputContainer: {
    width: '80%',      
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 5,
    
  },
  inputImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    marginTop: 40,
    margin: 5,
    width: '40%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRole: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    marginTop: 40,
    margin: 5,
    width: '30%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontFamily: "CabinSketch_700Bold",
  },
  title: {
    fontSize: 50,
    marginBottom: 5,
    color: "white",
    fontFamily: "CabinSketch_700Bold"
  },
  textInput: {
    color: 'white',
    fontFamily: "CabinSketch_400Regular",
    fontSize: 20,
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
    fontFamily: "CabinSketch_700Bold",
    fontSize: 18,
    color: 'white',
  },
  escapeButton: {
    backgroundColor: 'transparent',
    width: '25%',
    padding: 15,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
  },
  faIcon: {
    color: 'white',
  }
});




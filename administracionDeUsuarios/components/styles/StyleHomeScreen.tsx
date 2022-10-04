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
    flex: 1,
    marginTop: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginBottom: 300,    
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
    fontSize: 15,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  exitSection: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  exitText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'AlfaSlabOne_400Regular',
    marginLeft: 10,
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    margin: 5,
    width: '30%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    marginLeft: 35,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  faIcon: {
    color: 'black',
  },
  buttonLoadData: {
    height: 320,
    backgroundColor: ' rgba(131, 133, 140, 0.8);',
    borderLeftColor: '#05153F',
    borderLeftWidth: 10,
    borderRadius: 10,
    margin: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '80%',
  },
  buttonList: {
    height: 350,
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
});




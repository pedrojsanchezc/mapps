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
    justifyContent: 'space-between',
  },
  exitText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'PermanentMarker_400Regular',
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    margin: 5,
    width: '30%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonMainA: {
    backgroundColor: ' rgba(67, 203, 142, 0.5);',
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
  buttonMainB: {
    backgroundColor: ' rgba(254, 229, 90, 0.5);',
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
});




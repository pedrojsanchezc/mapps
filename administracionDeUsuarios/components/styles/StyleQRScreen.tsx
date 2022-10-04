import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c8e99',
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  exitSection: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  exitText: {
    color: '#5C5346',
    fontSize: 25,
    fontFamily: 'AlfaSlabOne_400Regular',
    textAlign: 'center',
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: '30%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonImageExit: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  buttonImageMain: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  }
});
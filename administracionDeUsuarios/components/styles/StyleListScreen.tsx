import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c8e99',
    flexDirection: 'column',
    justifyContent: 'center',
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
    marginTop: 20
  },
  exitText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'AlfaSlabOne_400Regular',
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
  buttonImageExit: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  buttonImageVote: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  body: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
    marginBottom: 10,
  },
  tableCell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  tableHeaderText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  tableCellText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  cardStyle: {
    backgroundColor: '#F2C335',
    borderColor: '#F2C335',
    height: 300, 
    width: '95%', 
    margin: 10,
    borderRadius: 10,
    borderWidth: 2 
  }
});

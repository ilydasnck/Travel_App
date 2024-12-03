import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  bar: {
    width: windowWidth,
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  beyazKutu: {
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maviKutu: {
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#2C86E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maviText: {
    color: '#2C86E9',
    fontSize: 15,
    fontWeight: '500',
  },
  beyazText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  kutu: {
    width: 380,
    height: 200,
    elevation: 10,
    shadowColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  otel: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  paid: {
    width: 60,
    height: 20,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    width: 120,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  altMenu: {
    backgroundColor: 'white',
    width: windowWidth,
    height: 80,
    position: 'absolute',
    bottom: 0,
    zIndex:10,
    elevation: 10,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  icons:{
    width:20,
    height:20,
  }
});

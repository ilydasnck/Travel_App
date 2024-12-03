import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  arkaPlan: {
    width: windowWidth,
    height: 400,
    position: 'absolute',
    opacity: 0.8,
  },
  container: {
    flex: 1,
  },
  child1: {
    flex: 4,
    backgroundColor: 'blue',
  },
  child2: {
    backgroundColor: 'white',
    flex: 6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icons: {
    width: 30,
    height: 30,
  },
  icons2: {
    width: 30,
    height: 30,
    marginLeft: 15,
    tintColor: 'white',
    marginRight: 10,
  },
  bar: {
    width: '98%',
    height: '500',
    marginTop: 10,
    padding: 15,
    flexDirection: 'row',
  },
  iconBox: {
    alignItems: 'center',
    padding: 10,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  twoIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 50,
    alignItems: 'center',
  },
  hello: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 1,
  },
  helloView: {
    position: 'absolute',
    left: '5%',
    top: '30%',
  },
  hello2: {
    color: 'white',
    fontSize: 20,
    zIndex: 1,
  },
  ilayda: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'lightblue',
    borderRadius: 25,
  },
  ilaydaContainer: {
    borderRadius: 20,
    borderColor: 'blue',
  },
  yanyana: {
    flexDirection: 'row',
    width: windowWidth,
    height: 150,
    marginTop: 200,
    justifyContent: 'space-evenly',
  },
  yanyana2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 75,
    height: 100,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#62B6FE',
    overflow: 'hidden', // Opaklık etkisinin sınırlı kalmasını sağlar
    flexDirection: 'column',
  },
  buttonBackground: {
    ...StyleSheet.absoluteFillObject, // Tüm alanı kaplamak için
    backgroundColor: 'white',
    opacity: 0.5, // Sadece arka plan için opaklık
  },
  buttonImage: {
    width: 35,
    height: 35,
    tintColor: 'white',
    zIndex: 1,
    marginBottom: 5,
  },
  altAlta: {
    flex: 1, // Tüm alanı kaplamasını sağlamak için
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  search: {
    width: windowWidth * 0.95,
    height: 55,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black', // Gölgenin rengini belirler
    shadowOffset: {width: 0, height: 5}, // Gölgenin yeri
    shadowOpacity: 0.3, // Gölgenin opaklığı
    shadowRadius: 10, // Gölgenin yayılma mesafesi
    elevation: 5,
    paddingLeft: 35,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 170,
    marginTop: -15,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#5286c2',
  },
  text2: {
    marginRight: 230,
  },
  nokta: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'blue',
    zIndex: 10,
  },
  noktaGri: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'grey',
    zIndex: 10,
  },
  kucukResim: {
    width: 130,
    height: 170,
    borderRadius: 20,
    opacity: 0.85,
    zIndex: 0,
  },
  buyukResimContainer: {
    marginLeft: 10,
    marginRight: 10,
    width: 150,
    height: 190,
    borderRadius: 20,
  },
  kucukResimContainer: {
    width: 130,
    height: 170,
    borderRadius: 20,
    position: 'relative',
  },
  buyukResim: {
    width: 150,
    height: 190,
    borderRadius: 20,
    opacity: 0.85,
  },
  heart: {
    width: 15,
    height: 15,
    tintColor: 'white',
  },
  maps: {
    width: 15,
    height: 15,
    tintColor: 'white',
    left: -2,
  },
  maps2: {
    width: 15,
    height: 15,
    left: -2,
    tintColor: 'red',
  },
  star: {
    width: 15,
    height: 15,
    top: -95,
    left: 60,
  },
  mapsContainer: {
    top: -60,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
  },
  starContainer: {
    top: -60,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
  },
  kutu: {
    width: 380,
    height: 150,
    elevation: 10,
    shadowColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  otel: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

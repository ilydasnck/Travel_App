import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import Style from './styles';
import Icons from '../../Assets/icons';
import Images from '../../Assets/image';
import {Icon} from '../../Assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <View style={Style.child1}>
          <ImageBackground source={Images.dag} style={Style.arkaPlan}>
            <View style={Style.bar}>
              <View style={Style.iconBox}>
                <Image source={Icons.menu} style={Style.icons} />
              </View>
              <View style={Style.twoIcon}>
                <View>
                  <Image
                    source={Icons.notification}
                    style={Style.icons2}></Image>
                </View>
                <View style={Style.ilaydaContainer}>
                  <Image source={Images.ilayda} style={Style.ilayda} />
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={Style.helloView}>
            <Text style={Style.hello}>Hello! İlayda</Text>
            <Text style={Style.hello2}>Where would you like to go?</Text>
          </View>

          <View style={Style.yanyana}>
            <View style={Style.button}>
              <View style={Style.buttonBackground} />
              <View style={Style.altAlta}>
                <View>
                  <Image source={Icons.flight} style={Style.buttonImage} />
                </View>
                <View>
                  <Text style={Style.buttonText}>Flight</Text>
                </View>
              </View>
            </View>

            <View style={Style.button}>
              <View style={Style.buttonBackground} />
              <View style={Style.altAlta}>
                <View>
                  <Image source={Icons.hotel} style={Style.buttonImage} />
                </View>
                <View>
                  <Text style={Style.buttonText}>Hotel</Text>
                </View>
              </View>
            </View>

            <View style={Style.button}>
              <View style={Style.buttonBackground} />
              <View style={Style.altAlta}>
                <View>
                  <Image source={Icons.holiday} style={Style.buttonImage} />
                </View>
                <View>
                  <Text style={Style.buttonText}>Holiday</Text>
                </View>
              </View>
            </View>

            <View style={Style.button}>
              <View style={Style.buttonBackground} />
              <View style={Style.altAlta}>
                <View>
                  <Image source={Icons.offers} style={Style.buttonImage} />
                </View>
                <View>
                  <Text style={Style.buttonText}>Offers</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={Style.child2}>
          <View style={Style.searchContainer}>
            <View style={[Style.search, Style.yanyana2]}>
              <View>
                <Image source={Icons.search} style={Style.icon} />
              </View>
              <View style={Style.text2}>
                <Text>Where to go</Text>
              </View>
            </View>

            <ScrollView
              horizontal={true}
              style={{
                marginHorizontal: 20,
                height: 230,
                marginTop: 20,
              }}>
              <View style={{justifyContent: 'center'}}>
                <View>
                  <Image
                    source={Images.arkaPlan}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    width: 60,
                    alignItems: 'center',
                  }}>
                  <Text>İstanbul</Text>
                </View>
              </View>

              <View style={{justifyContent: 'center'}}>
                <View>
                  <Image
                    source={Images.arkaPlan}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    width: 60,
                    alignItems: 'center',
                  }}>
                  <Text>Elazığ</Text>
                </View>
              </View>

              <View style={{justifyContent: 'center'}}>
                <View>
                  <Image
                    source={Images.arkaPlan}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    width: 60,
                    alignItems: 'center',
                  }}>
                  <Text>Malatya</Text>
                </View>
              </View>

              <View style={{justifyContent: 'center'}}>
                <View>
                  <Image
                    source={Images.arkaPlan}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    width: 60,
                    alignItems: 'center',
                  }}>
                  <Text>Bursa</Text>
                </View>
              </View>

              <View style={{justifyContent: 'center'}}>
                <View>
                  <Image
                    source={Images.arkaPlan}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    width: 60,
                    alignItems: 'center',
                  }}>
                  <Text>Eskişehir</Text>
                </View>
              </View>
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                width: 50,
                height: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 7,
              }}>
              <View style={Style.nokta}></View>
              <View style={Style.noktaGri}></View>
              <View style={Style.noktaGri}></View>
            </View>
          </View>

          <View
            style={{
              width: 410,
              height: 50,
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
                Recommended
              </Text>
            </View>
            <View>
              <Text style={{color: 'black', fontSize: 14}}>View All</Text>
            </View>
          </View>

          <ScrollView
            horizontal={true}
            style={{
              marginHorizontal: 20,
              height: 230,
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                height: 200,
              }}>
              <View style={Style.kucukResimContainer}>
                <View>
                  <Image source={Images.arkaPlan} style={Style.kucukResim} />
                </View>
                <View
                  style={{
                    backgroundColor: 'grey',
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    top: -160,
                    marginLeft: 90,
                  }}>
                  <Image source={Icons.heart} style={Style.heart} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={Style.mapsContainer}>
                    <Image source={Icons.maps} style={Style.maps} />
                    <Text style={{color: 'white', left: -8}}>Elazığ</Text>
                  </View>
                  <View style={Style.starContainer}>
                    <Image source={Icons.star} style={Style.maps} />
                    <Text style={{color: 'white', left: -16, fontSize: 12}}>
                      4.5
                    </Text>
                  </View>
                </View>
              </View>

              <View style={Style.buyukResimContainer}>
                <Image source={Images.arkaPlan} style={Style.buyukResim} />
                <View
                  style={{
                    backgroundColor: 'grey',
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    top: -180,
                    marginLeft: 110,
                  }}>
                  <Image source={Icons.heart} style={Style.heart} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={Style.mapsContainer}>
                    <Image source={Icons.maps} style={Style.maps} />
                    <Text style={{color: 'white', left: -8}}>Elazığ</Text>
                  </View>
                  <View style={Style.starContainer}>
                    <Image source={Icons.star} style={Style.maps} />
                    <Text style={{color: 'white', left: -10, fontSize: 12}}>
                      4.5
                    </Text>
                  </View>
                </View>
              </View>
              <View style={Style.kucukResimContainer}>
                <Image source={Images.arkaPlan} style={Style.kucukResim} />
                <View
                  style={{
                    backgroundColor: 'grey',
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    top: -160,
                    marginLeft: 90,
                  }}>
                  <Image source={Icons.heart} style={Style.heart} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={Style.mapsContainer}>
                    <Image source={Icons.maps} style={Style.maps} />
                    <Text style={{color: 'white', left: -8}}>Elazığ</Text>
                  </View>
                  <View style={Style.starContainer}>
                    <Image source={Icons.star} style={Style.maps} />
                    <Text style={{color: 'white', left: -16, fontSize: 12}}>
                      4.5
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

          <View
            style={{
              width: 410,
              height: 50,
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              top: -15,
            }}>
            <View>
              <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
                Popular Destination
              </Text>
            </View>
            <View>
              <Text style={{color: 'black', fontSize: 14}}>View All</Text>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <View style={Style.kutu}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  top: 10,
                }}>
                <View>
                  <Image source={Images.otel} style={Style.otel} />
                  <View style={{flexDirection: 'row'}}>
                    <Image source={Icons.star} style={Style.star} />
                    <Text style={{top: -95, left: 63, color: 'white'}}>
                      4.5
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{padding: 15}}>
                    <Text>Enjoy Your</Text>
                    <Text>Summer Vacation</Text>

                    <View style={{flexDirection: 'row', top:10}}>
                      <View>
                        <Image source={Icons.location} style={Style.maps2} />
                      </View>
                      <View>
                        <Text style={{fontSize: 12}}>İstanbul/Türkiye</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 80,
                      top: 20,
                      padding: 5,
                    }}>
                    <Text style={{fontSize:10}}>From</Text>
                    <Text style={{color: 'red'}}>200$/</Text>
                    <Text style={{fontSize:13}}>For person</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={Style.kutu}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  top: 10,
                }}>
                <View>
                  <Image source={Images.otel} style={Style.otel} />
                  <View style={{flexDirection: 'row'}}>
                    <Image source={Icons.star} style={Style.star} />
                    <Text style={{top: -95, left: 63, color: 'white'}}>
                      4.5
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{padding: 15}}>
                    <Text>Enjoy Your</Text>
                    <Text>Summer Vacation</Text>

                    <View style={{flexDirection: 'row', top:10}}>
                      <View>
                        <Image source={Icons.location} style={Style.maps2} />
                      </View>
                      <View>
                        <Text style={{fontSize: 12}}>İstanbul/Türkiye</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 80,
                      top: 20,
                      padding: 5,
                    }}>
                    <Text style={{fontSize:10}}>From</Text>
                    <Text style={{color: 'red'}}>200$/</Text>
                    <Text style={{fontSize:13}}>For person</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={Style.kutu}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  top: 10,
                }}>
                <View>
                  <Image source={Images.otel} style={Style.otel} />
                  <View style={{flexDirection: 'row'}}>
                    <Image source={Icons.star} style={Style.star} />
                    <Text style={{top: -95, left: 63, color: 'white'}}>
                      4.5
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{padding: 15}}>
                    <Text>Enjoy Your</Text>
                    <Text>Summer Vacation</Text>

                    <View style={{flexDirection: 'row', top:10}}>
                      <View>
                        <Image source={Icons.location} style={Style.maps2} />
                      </View>
                      <View>
                        <Text style={{fontSize: 12}}>İstanbul/Türkiye</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 80,
                      top: 20,
                      padding: 5,
                    }}>
                    <Text style={{fontSize:10}}>From</Text>
                    <Text style={{color: 'red'}}>200$/</Text>
                    <Text style={{fontSize:13}}>For person</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

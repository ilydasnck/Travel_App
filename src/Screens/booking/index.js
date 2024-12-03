import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Styles from './styles';
import Icons from '../../Assets/icons';
import Images from '../../Assets/image';

const booking = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.bar}>
        <View>
          <Image source={Icons.menu2} style={Styles.menuIcon} />
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Booking</Text>
        </View>
        <View>
          <Image source={Icons.search} style={Styles.menuIcon} />
        </View>
      </View>

      <View
        style={{
          height: 100,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
        }}>
        <View style={Styles.beyazKutu}>
          <Text style={Styles.maviText}>Ongoing</Text>
        </View>
        <View style={Styles.maviKutu}>
          <Text style={Styles.beyazText}>Completed</Text>
        </View>
        <View style={Styles.beyazKutu}>
          <Text style={Styles.maviText}>Canceled</Text>
        </View>
      </View>

      <View style={{alignItems: 'center', height: 620}}>
          <View style={Styles.kutu}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                left: -30,
                top: 10,
              }}>
              <View>
                <Image source={Images.otel} style={Styles.otel} />
              </View>
              <View style={{padding: 15}}>
                <Text style={{fontWeight: 'bold'}}>Intercontinental Hotel</Text>
                <Text>İstanbul/Türkiye</Text>
                <View style={Styles.paid}>
                  <Text>Paid</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: 300,
                top: 20,
              }}>
              <View style={Styles.button1}>
                <Text>Cancel Booking</Text>
              </View>
              <View style={[Styles.button1, {backgroundColor: '#2C86E9'}]}>
                <Text>View Ticket</Text>
              </View>
            </View>
          </View>

          <View style={Styles.kutu}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                left: -30,
                top: 10,
              }}>
              <View>
                <Image source={Images.otel} style={Styles.otel} />
              </View>
              <View style={{padding: 15}}>
                <Text style={{fontWeight: 'bold'}}>Intercontinental Hotel</Text>
                <Text>İstanbul/Türkiye</Text>
                <View style={Styles.paid}>
                  <Text>Paid</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: 300,
                top: 20,
              }}>
              <View style={Styles.button1}>
                <Text>Cancel Booking</Text>
              </View>
              <View style={[Styles.button1, {backgroundColor: '#2C86E9'}]}>
                <Text>View Ticket</Text>
              </View>
            </View>
          </View>

          <View style={Styles.kutu}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                left: -30,
                top: 10,
              }}>
              <View>
                <Image source={Images.otel} style={Styles.otel} />
              </View>
              <View style={{padding: 15}}>
                <Text style={{fontWeight: 'bold'}}>Intercontinental Hotel</Text>
                <Text>İstanbul/Türkiye</Text>
                <View style={Styles.paid}>
                  <Text>Paid</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: 300,
                top: 20,
              }}>
              <View style={Styles.button1}>
                <Text>Cancel Booking</Text>
              </View>
              <View style={[Styles.button1, {backgroundColor: '#2C86E9'}]}>
                <Text>View Ticket</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={Styles.altMenu}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={Icons.home} style={Styles.icons}/>
                <Text>Home</Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={Icons.bag} style={Styles.icons}/>
                <Text>Booking</Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={Icons.location} style={Styles.icons}/>
                <Text>Location</Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={Icons.profile2} style={Styles.icons}/>
                <Text>Profile</Text>
            </View>

        </View>

        

      
    </SafeAreaView>
  );
};

export default booking;

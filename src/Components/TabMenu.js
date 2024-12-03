import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'; // `Image` bileşenini import edin

// Home ve Profile bileşenlerini import edin
import HomeScreen from '../home';
import ProfileScreen from '../profile';

// PNG ikon dosyalarını import edin
import HomeIcon from '../../assets/icons/home.png';
import NotificationIcon from '../../assets/icons/notification.png';
import PostIcon from '../../assets/icons/post.png';
import MessageIcon from '../../assets/icons/message.png';
import ProfileIcon from '../../assets/icons/user.png';

// Tab navigatörü oluşturun
const Tab = createBottomTabNavigator();

export default function TabMenu() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconSource;

            // Route ismine göre ikon kaynağını belirleyin
            if (route.name === 'Home') {
              iconSource = HomeIcon;
            } else if (route.name === 'notification') {
              iconSource = NotificationIcon;
            } else if (route.name === 'post') {
              iconSource = PostIcon;
            } else if (route.name === 'message') {
              iconSource = MessageIcon;
            } else if (route.name === 'profile') {
              iconSource = ProfileIcon;
            }

            // `Image` bileşenini kullanarak ikonu geri döndür
            return (
              <Image
                source={iconSource}
                style={{width: size, height: size, tintColor: color}}
              />
            );
          },
          tabBarActiveTintColor: 'tomato', // Aktif sekme rengi
          tabBarInactiveTintColor: 'gray', // Pasif sekme rengi
          tabBarStyle: {display: 'flex'}, // Stil ayarları
        })}>
        {/* Sekmeleri tanımlayın */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="notification" component={ProfileScreen} />
        <Tab.Screen name="post" component={ProfileScreen} />
        <Tab.Screen name="message" component={ProfileScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

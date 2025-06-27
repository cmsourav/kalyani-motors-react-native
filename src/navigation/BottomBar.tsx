import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MessageScreen from '../screens/message/MessageScreen';
import AddItem from '../screens/Add/AddItem';
import CalenderScreen from '../screens/calender/CalenderScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MessageIcon from 'react-native-vector-icons/MaterialIcons';
import AddIcon from 'react-native-vector-icons/Octicons'

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case 'Home':
                return <Icon name="home" size={30} color="#2051E5" />;
                break;
              case 'Message':
                return (
                  <MessageIcon name='message'  size={25} color= '#445668' />
                );
                break;
              case 'Add':
                return (
                  <Image source={require('../assets/Add_icon.png')} style={{marginTop:8}} />
                );
                break;
              case 'Calender':
                return (
                  <Icon name='calendar' size={25} color= '#445668' />
                );
                break;
              case 'Profile':
                return (
                  <Icon name='user-circle' size={25} color= '#445668' />
                );
                break;
            }
          },
          tabBarStyle: { height: 65, backgroundColor: '#FFFFFF' },
          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 4,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen
          name="Add"
          component={AddItem}
          options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen name="Calender" component={CalenderScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomTabIcons: {
    width: 24,
    height: 24,
  },
});

import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen';
import MessageScreen from '../screens/message/MessageScreen';
import AddItem from '../screens/Add/AddItem';
import CalenderScreen from '../screens/calender/CalenderScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Image source={require('../assets/home_active.png')} style={styles.bottomTabIcons} />
              break;
            case 'Message':
              return <Image source={require('../assets/Message.png')} style={styles.bottomTabIcons} />
              break;
            case 'Add':
              return <Image source={require('../assets/Add_icon.png')} style={{ width: 40, height: 40, marginTop: 10 }} />
              break;
            case 'Calender':
              return <Image source={require('../assets/calendar_icon.png')} style={styles.bottomTabIcons} />
              break;
            case 'Profile':
              return <Image source={require('../assets/profile_icon.png')} style={styles.bottomTabIcons} />
              break;
          }
        },
        tabBarStyle: { height: 60, backgroundColor: '#FFFFFF' },
        tabBarItemStyle: { justifyContent: 'center', alignItems: 'center' }
      })}>
        <Tab.Screen name='Home' component={HomeStack} />
        <Tab.Screen name='Message' component={MessageScreen} />
        <Tab.Screen name='Add' component={AddItem} options={{ tabBarLabel: () => null }} />
        <Tab.Screen name='Calender' component={CalenderScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomBar

const styles = StyleSheet.create({
  bottomTabIcons: {
    width: 24,
    height: 24,
  },
})
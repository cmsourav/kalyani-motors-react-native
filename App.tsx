

import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from './src/navigation/BottomBar';
import MessageScreen from './src/screens/message/MessageScreen';

const App = () => {
  return (
   <MessageScreen />
  )
}

export default App

const styles = StyleSheet.create({})
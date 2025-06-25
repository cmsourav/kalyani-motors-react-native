

import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from './src/navigation/BottomBar';

const App = () => {
  return (
    <BottomBar />
  )
}

export default App

const styles = StyleSheet.create({})
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './component/Header'
import HomeBody from './component/HomeBody'

const HomeScreen = () => {
  return (
<ScrollView>
    <Header />
    <HomeBody />
</ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
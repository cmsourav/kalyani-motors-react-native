import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './component/Header';
import HomeBody from './component/HomeBody';

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff', height: '100%' }}>
      <StatusBar backgroundColor="#2051E5" />
      <Header />
      <HomeBody />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

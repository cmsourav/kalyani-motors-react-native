import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AddCard from './components/AddCard';
import OrderDetails from './components/OrderDetails';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <AddCard />
      <View style={{height: 30}} />
      <OrderDetails />
      <View style={{height: 35}} />
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 16, fontWeight: '600', color: '#FFF'}}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#87A2FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  }
});

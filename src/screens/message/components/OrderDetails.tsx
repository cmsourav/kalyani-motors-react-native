import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OrderDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Details</Text>

      <View style={{ marginTop: 25 }}>
        <View style={styles.keyValueContainer}>
          <Text style={styles.key}>Bonsai Plant</Text>
          <Text style={styles.value}>$38.99</Text>
        </View>
        <View style={styles.keyValueContainer}>
          <Text style={styles.key}>Plant Fertilizer</Text>
          <Text style={styles.value}>$18.99</Text>
        </View>
        <View style={styles.keyValueContainer}>
          <Text style={styles.key}>Plant Soil</Text>
          <Text style={styles.value}>$38.99</Text>
        </View>
      </View>

      <View style={{ width: 200, alignSelf: 'flex-end', marginTop: 24 }}>
        <View style={styles.keyValueContainer}>
          <Text>SubTotal</Text>
          <Text>$12.05</Text>
        </View>
        <View style={styles.keyValueContainer}>
          <Text>discount price</Text>
          <Text>$2.05</Text>
        </View>
        <View style={styles.keyValueContainer}>
          <Text>Tax</Text>
          <Text>$2</Text>
        </View>

        <View style={[styles.keyValueContainer, {marginTop: 12}]}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Total</Text>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>$90.60</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    padding: 25,
    borderRadius: 6,
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
  },
  keyValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginRight: 10,
  },
  key: {
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
});

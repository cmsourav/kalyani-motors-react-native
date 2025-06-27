import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const AddCard = () => {
  return (
    <View>
      <View style={styles.addCardContainer}>
        <View style={styles.plusIcon}>
          <Icon name="plus" size={24} color="#FFF" />
        </View>
        <Text style={styles.addCardText}>Add a new card</Text>
      </View>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  addCardContainer: {
    width: 350,
    height: 200,
    backgroundColor: '#faf3f0',
    marginTop: 30,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#f7b092',
  },
  plusIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#e85c20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  addCardText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#993308',
  },
});

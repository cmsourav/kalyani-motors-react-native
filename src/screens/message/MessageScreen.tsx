import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MessageScreen = () => {
  return (
    <View>
      <Text style={styles.headingText}>Message Screen</Text>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type HeadingTextProps = {
  title: string;
};

const HeadingText = ({ title }: HeadingTextProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginStart: 20,
    marginTop: 25,
    marginBottom: 15,
  },
});

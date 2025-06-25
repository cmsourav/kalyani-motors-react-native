import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

type HeaderProp = {
  children: React.ReactNode;
};

const ProfileHeader = ({ children }: HeaderProp) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/header.png')}
        style={{ height: 105, width: 200 }}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2051E5',
    height: 115,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    // marginBottom: 25,
  },
});

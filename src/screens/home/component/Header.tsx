import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/header.png')}
        style={styles.bgImg}
      >
        <View style={styles.infoContainer}>
          <View style={{ justifyContent: 'center', marginLeft: 24 }}>
            <Text style={styles.greetings}>Good Morning</Text>
            <Text style={styles.uName}>Sourav Raj CM</Text>
          </View>
          <View style={styles.iconBox}>
            <Image
              source={require('../../../../assets/images/bell.png')}
              style={{ width: 21, height: 20, marginRight: 30 }}
            />
            <Image
              source={require('../../../../assets/images/menu.png')}
              style={styles.icon}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#2051E5',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  bgImg: {
    height: 100,
    width: 200,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greetings: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 6,
    fontFamily: 'Poppins-Medium'
  },
  uName: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Poppins-Medium'
  },
  icon: {
    width: 24,
    height: 19,
  },
  iconBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: -140,
  },
});

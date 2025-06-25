import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/header.png')}
        style={{ height: 130 }}
        resizeMode='cover'
      >
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.greetings}>Good Morning</Text>
            <Text style={styles.uName}>Sourav Raj CM</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../../../assets/images/bell.png')}
              style={{ marginRight: 30, width: 20, height:20 }}
            />
            <Image
              source={require('../../../../assets/images/menu.png')}
              style={styles.icon}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2051E5',
    height: 140,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    marginBottom: 25,
  },
  infoContainer: {
    position: 'relative',
    top: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  greetings: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 6,
  },
  uName: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
  },
  icon: {
    width: 24,
    height: 19
  }
})



















// import { ImageBackground, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Header = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../../../../assets/images/header.png')}
//         style={styles.headerImg} >
//         <View style={styles.contentContainer}>
//           <View>
// <Text>Hellooooo</Text>
// <Text>Hellooooo</Text>
//           </View>
//           <View>
//             <Text>Hellooooo</Text>
//             <Text>Hellooooo</Text>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   )
// }

// export default Header

// const styles = StyleSheet.create({
//   container: {
//     height: 140,
//     backgroundColor: '#2051E5',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   headerImg: {
//     height: 130,
//     width: 200,
//   },
//   contentContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// })
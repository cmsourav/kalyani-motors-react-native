import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AnimatedCircularProgress } from 'react-native-circular-progress';




const OngoingCard = ({ title, description, teamType, fillPercentage, progressPercentage, date, tagColor, cardBg }: OngoingCardProp) => {

    const profileImg = [
        require('../../../assets/01.png'),
        require('../../../assets/02.png'),
        require('../../../assets/03.png'),
    ];

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={cardBg}
            style={styles.container}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.tag, {backgroundColor: tagColor}]} />
                <View style={{ margin: 18 }}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>

                    <View style={styles.subContainer} >
                        <View>
                            <Text style={styles.subHeading}>{teamType}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                {profileImg.map((image, index) => (
                                    <Image
                                        key={index}
                                        source={image}
                                        resizeMode='cover'
                                    />
                                ))}
                                <View style={styles.customProfileImg} >
                                    <Text style={{ color: '#fff' }}>+3</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginStart: 30 }}>
                            <Text style={styles.subHeading}>Due date</Text>
                            <View style={styles.row1}>
                                <Image source={require('../../../assets/calender.png')} />
                                <Text style={styles.dateText}>{date}</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <AnimatedCircularProgress
                    size={50}
                    width={5}
                    fill={fillPercentage}
                    tintColor="#2051E5"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#FFFFFF"
                    rotation={-10}
                    style={{ marginTop: 25 }}
                >
                    {
                        () => (<Text style={styles.percentage}>{progressPercentage}</Text>)
                    }
                </AnimatedCircularProgress>
            </View>

        </LinearGradient>
    )
}

export default OngoingCard

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 150,
        borderRadius: 14,
    },
    tag: {
        width: 4,
        height: 30,
        backgroundColor: '#2051E5',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 22
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        color: '#0D1829'
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        color: '#0D182999'
    },
    subContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    subHeading: {
        fontSize: 14,
        fontWeight: '400',
        color: '#0D182999'
    },
    customProfileImg: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2051E5',
        marginLeft: -3
    },
    row1: {
        flexDirection: 'row',
        marginTop: 16,
    },
    dateText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#445668',
        marginLeft: 6
    },
    percentage: {
        fontSize: 14,
        fontWeight: '400',
        color: '#2051E5',
        textAlign: 'center'
    }

})
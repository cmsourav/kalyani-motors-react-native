import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type CardProps = {
    title: string,
    description: string,
}
const ProjectCard = ({ title, description }: CardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}> {title} </Text>
            <View style={styles.row}>
                <Text style={styles.description}>{description}</Text>
                <Image source={require('../../../assets/right_icon.png')} />
            </View>
        </View>
    )
}

export default ProjectCard

const styles = StyleSheet.create({
    card: {
        width: 170,
        height: 100,
        backgroundColor: '#EEF2FF',
        borderRadius: 14,
        padding: 14,
        shadowColor: '#0000000',
        shadowOpacity: 5,
    },
    title: {
        fontSize: 14,
        color: '#0D1829',
        fontFamily: 'Poppins-SemiBold',
    },
    description: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#2051E5',
    },
    row: {
        marginTop: 21,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
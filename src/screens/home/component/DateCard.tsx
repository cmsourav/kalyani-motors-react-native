import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type DateCardProps = {
    isSelected: boolean,
    day: string,
    date: string,
}

const DateCard = ({ isSelected, day, date }: DateCardProps) => {
    return (
        <View style={[styles.card, {backgroundColor : isSelected ? '#2051E5' : '#F0F2F6'}]}>
            <Text style={[styles.day, {color: isSelected ? '#fff' : '#445668'}]}>{day}</Text>
            <Text style={[styles.date, {color: isSelected ? '#fff' : '#0D1829'}]}>{date}</Text>
        </View>
    )
}

export default DateCard

const styles = StyleSheet.create({
    card: {
        width: 78,
        height: 87,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    day: {
        fontSize: 16,
        fontWeight: '400',
    },
    date: {
        fontSize: 22,
        fontWeight: '500',
    },
})
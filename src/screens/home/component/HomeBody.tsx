import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeadingText from './HeadingText'
import DateCard from './DateCard'

const HomeBody = () => {
    const dates: { day: string, date: string }[] = [
        { day: 'Mon', date: '5' }, { day: 'Tue', date: '6' }, { day: 'Wed', date: '7' }, { day: 'Thu', date: '8' },
        { day: 'Fri', date: '9' }, { day: 'Sat', date: '10' }, { day: 'Sun', date: '11' }
    ]
    return (
        <View style={{ marginHorizontal: 25 }}>
            <HeadingText title='Select Date' />
            <View style={{ marginVertical: 19 }} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dates.map((item, index) => (
                <DateCard day={item.day} date={item.date} isSelected={false} />
                ))}

            </ScrollView>
        </View>
    )
}

export default HomeBody

const styles = StyleSheet.create({})
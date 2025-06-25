import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeadingText from './HeadingText'
import DateCard from './DateCard'
import ProjectCard from './ProjectCard'
import OngoingCard from './OngoingCard'
import { useNavigation } from '@react-navigation/native'

const HomeBody = () => {
    const dates: { day: string, date: string }[] = [
        { day: 'Mon', date: '5' }, { day: 'Tue', date: '6' }, { day: 'Wed', date: '7' }, { day: 'Thu', date: '8' },
        { day: 'Fri', date: '9' }, { day: 'Sat', date: '10' }, { day: 'Sun', date: '11' }, { day: 'Mon', date: '12' },
    ];

    const projectData: { title: string, description: string }[] = [
        { title: 'Personal \n to-do', description: 'Ongoing' }, { title: 'Work \n to-do', description: 'In Process' },
        { title: 'High Priority \n Task', description: 'Go to task' }, { title: 'Personal \n Things', description: 'On-hold' }
    ]

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('Project')
    }

    return (
        <View style={styles.container}>

            <HeadingText title='Select Date' />
            <View style={styles.spacingContainer1} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dates.map((item, index) => (
                    <DateCard key={index} day={item.day} date={item.date} isSelected={index === 0} />
                ))}
            </ScrollView>

            <View style={styles.spacingContainer2} />
            <HeadingText title='Projects' />
            <View style={styles.spacingContainer3} />
            <View style={styles.gridView}>
                {projectData.map((item, index) => (
                    <TouchableOpacity key={index} onPress={handlePress} >
                        <ProjectCard title={item.title} description={item.description} />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.spacingContainer2} />
            <HeadingText title='Ongoing task' />
            <View style={styles.spacingContainer3} />
            <OngoingCard 
            title= 'Candidate Management' 
            description= 'For - Zoho Project'
            teamType='Teammates'
            fillPercentage={78}
            progressPercentage='78%' 
            date='June 6, 2022'
            cardBg={['#EAEFFF', '#FAF9FF']} />
            <View style={styles.spacingContainer2} />
        </View>
    )
}

export default HomeBody

const styles = StyleSheet.create({
    container: { marginHorizontal: 25 },
    spacingContainer1: { marginTop: 19 },
    spacingContainer2: { marginTop: 25 },
    spacingContainer3: { marginTop: 15 },
    gridView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10
    }
})
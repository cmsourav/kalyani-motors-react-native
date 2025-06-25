import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import ProfileHeader from './component/ProfileHeader';
import OngoingCard from './component/OngoingCard';

const ProjectScreen = () => {
  const ongoingData: OngoingCardProp[] = [
    {
      title: 'Intercom',
      description: 'Digital Product Design',
      teamType: 'Team',
      fillPercentage: 88,
      progressPercentage: '88%',
      date: 'July 23, 2022',
      tagColor: '#2051E5',
      cardBg: ['#EAEFFF', '#FAF9FF']
    },
    {
      title: 'Zoho Recruit',
      description: 'Dashboard UI',
      teamType: 'Team',
      fillPercentage: 78,
      progressPercentage: '58%',
      date: 'June 12, 2022',
      tagColor: '#F77307',
      cardBg: ['#EDFFFB', '#FFEBF4']
    },
    {
      title: 'Healthy Sure',
      description: 'Landing Page Website',
      teamType: 'Team',
      fillPercentage: 30,
      progressPercentage: '30%',
      date: 'June 6, 2022',
      tagColor: '#16AD4D',
      cardBg: ['#FFFAF3', '#ECEFFF']
    },
    {
      title: 'Zoho Recruit',
      description: 'Dashboard UI',
      teamType: 'Team',
      fillPercentage: 50,
      progressPercentage: '54%',
      date: 'June 6, 2022',
      tagColor: '#E45D32',
      cardBg: ['#FFFAF3', '#ECEFFF']
    },
    {
      title: 'Healthy Sure',
      description: 'Landing Page Website',
      teamType: 'Team',
      fillPercentage: 30,
      progressPercentage: '30%',
      date: 'June 6, 2022',
      tagColor: '#16AD4D',
      cardBg: ['#FFFAF3', '#ECEFFF']
    },
    {
      title: 'Zoho Recruit',
      description: 'Dashboard UI',
      teamType: 'Team',
      fillPercentage: 50,
      progressPercentage: '54%',
      date: 'June 6, 2022',
      tagColor: '#E45D32',
      cardBg: ['#FFFAF3', '#ECEFFF']
    },
  ]
  return (
    <View style={{ backgroundColor: '#fff', flex: 1, }}>
      <ProfileHeader>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Projects</Text>
          <Image source={require('../../assets/search.png')} style={styles.icon} />
        </View>
      </ProfileHeader>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={ongoingData}
          renderItem={({ item }) => (
            <View style={{ marginTop: 10 }}>
              <OngoingCard
                title={item.title}
                description={item.description}
                teamType={item.teamType}
                fillPercentage={item.fillPercentage}
                progressPercentage={item.progressPercentage}
                date={item.date}
                tagColor={item.tagColor}
                cardBg={item.cardBg} />
            </View>
          )} 
           contentContainerStyle={{ paddingBottom: 150 }}
          />
      </View>
    </View>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    left: 140,
    lineHeight: 20,
  },
  icon: {
    width: 20,
    height: 20,
    left: 165,
  },
});

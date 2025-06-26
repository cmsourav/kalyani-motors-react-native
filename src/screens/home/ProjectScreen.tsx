import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import ProfileHeader from './component/ProfileHeader';
import OngoingCard from './component/OngoingCard';
import { ongoingData } from '../../assets/data/ProjectData';

const ProjectScreen = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <ProfileHeader>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Projects</Text>
          <Image
            source={require('../../assets/search.png')}
            style={styles.icon}
          />
        </View>
      </ProfileHeader>
      <View style={{ height: 10 }} />
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
                cardBg={item.cardBg}
              />
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
    fontFamily: 'Poppins-Medium',
    color: 'white',
    left: 140,
  },
  icon: {
    width: 20,
    height: 20,
    left: 165,
  },
});

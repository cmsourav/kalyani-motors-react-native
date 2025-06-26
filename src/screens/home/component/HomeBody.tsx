import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeadingText from './HeadingText';
import DateCard from './DateCard';
import ProjectCard from './ProjectCard';
import OngoingCard from './OngoingCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/RootStackParamList';
import { dates, projectData } from '../../../assets/data/HomeData';

const HomeBody = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Project');
  };

  return (
    <View style={styles.container}>
      <View>
        <HeadingText title="Select Date" />
        <FlatList
          contentContainerStyle={{ marginStart: 20, marginEnd: 150 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dates}
          renderItem={({ item, index }) => (
            <DateCard
              key={index}
              day={item.day}
              date={item.date}
              isSelected={index === 0}
            />
          )}
        />
        <HeadingText title="Projects" />
        <View style={styles.gridView}>
          {projectData.map((item, index) => (
            <TouchableOpacity key={index} onPress={handlePress}>
              <ProjectCard title={item.title} description={item.description} />
            </TouchableOpacity>
          ))}
        </View>

        <HeadingText title="Ongoing task" />
        <View style={styles.spacingContainer3}>
          <OngoingCard
            title="Candidate Management"
            description="For - Zoho Project"
            teamType="Teammates"
            fillPercentage={78}
            progressPercentage="78%"
            date="June 6, 2022"
            tagColor="#2051E5"
            cardBg={['#EAEFFF', '#FAF9FF']}
          />
          <View style={{ marginTop: 10 }} />
          <OngoingCard
            title="Candidate Management"
            description="For - Zoho Project"
            teamType="Teammates"
            fillPercentage={78}
            progressPercentage="78%"
            date="June 6, 2022"
            tagColor="#2051E5"
            cardBg={['#EAEFFF', '#FAF9FF']}
          />
          <View style={{ marginBottom: 10 }} />
        </View>
      </View>
    </View>
  );
};

export default HomeBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacingContainer3: {
    marginHorizontal: 20,
  },
  gridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    marginHorizontal: 18,
  },
});

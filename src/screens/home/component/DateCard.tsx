import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type DateCardProps = {
  isSelected: boolean;
  day: string;
  date: string;
};

const DateCard = ({ isSelected, day, date }: DateCardProps) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isSelected ? '#2051E5' : '#F0F2F6',
          width: isSelected ? 78 : 66,
          height: isSelected ? 87 : 73,
          marginTop: isSelected ? 0 : 7,
        },
      ]}
    >
      <Text style={[styles.day, { color: isSelected ? '#fff' : '#445668' }]}>
        {day}
      </Text>
      <Text style={[styles.date, { color: isSelected ? '#fff' : '#0D1829' }]}>
        {date}
      </Text>
    </View>
  );
};

export default DateCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  day: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  date: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
});

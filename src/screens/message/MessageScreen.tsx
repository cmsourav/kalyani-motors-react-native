import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AddCard from './components/AddCard';
import OrderDetails from './components/OrderDetails';
import MainCard from './components/MainCard';

interface SavedCard {
  id: string;
  cardNumber: string;
  cardHolderName: string;
  expiry: string;
  cvv: string;
  zipcode: string;
}

const MessageScreen = () => {
  const [showMainCard, setShowMainCard] = useState(false);
  const [savedCards, setSavedCards] = useState<SavedCard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  const handleAddCardPress = () => {
    // Animate in MainCard
    setShowMainCard(true);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleCardVerified = (cardData: SavedCard) => {
    setSavedCards(prev => [cardData, ...prev]); // Add new card at the beginning
    setShowMainCard(false);
    setCurrentCardIndex(0);
    
    // Reset animations
    fadeAnim.setValue(0);
    scaleAnim.setValue(0.8);
  };

  const renderSavedCard = (card: SavedCard) => (
    <View style={styles.savedCardContainer}>
      {/* Card Number and CVV Row */}
      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Card Number</Text>
          <Text style={styles.cardNumberDisplay}>
            {card.cardNumber.replace(/(\d{4})/g, '$1 ').trim()}
          </Text>
        </View>
        <View style={styles.smallInputGroup}>
          <Text style={styles.inputLabel}>CVV</Text>
          <Text style={styles.cvvDisplay}>***</Text>
        </View>
      </View>

      {/* Card Holder Name - Full Width */}
      <View style={styles.fullWidthInputGroup}>
        <Text style={styles.inputLabel}>Card Holder Name</Text>
        <Text style={styles.cardHolderDisplay}>{card.cardHolderName}</Text>
      </View>

      {/* Expiry, Zipcode, and Card Badge Row */}
      <View style={styles.row}>
        <View style={styles.smallInputGroup}>
          <Text style={styles.inputLabel}>Expiry Date</Text>
          <Text style={styles.expiryDisplay}>{card.expiry}</Text>
        </View>
        <View style={styles.smallInputGroup}>
          <Text style={styles.inputLabel}>Zip Code</Text>
          <Text style={styles.zipcodeDisplay}>{card.zipcode}</Text>
        </View>
        <View style={styles.cardBadge}>
          <Text style={styles.cardBadgeText}>VISA</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {showMainCard ? (
        <Animated.View 
          style={[
            styles.mainCardContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            }
          ]}
        >
          <MainCard onCardVerified={handleCardVerified} />
        </Animated.View>
      ) : (
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          style={styles.scrollView}
        >
          {savedCards.map((card, index) => (
            <View key={card.id} style={styles.cardWrapper}>
              {renderSavedCard(card)}
            </View>
          ))}
          <View style={styles.cardWrapper}>
            <AddCard onPress={handleAddCardPress} />
          </View>
        </ScrollView>
      )}
      
      <OrderDetails />
      <View style={{height: 35}} />
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 16, fontWeight: '600', color: '#FFF'}}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#87A2FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  savedCardContainer: {
    width: 350,
    height: 240,
    backgroundColor: '#000000',
    marginTop: 30,
    elevation: 3,
    padding: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#f7b092',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 12,
  },
  inputGroup: {
    flex: 1,
    marginHorizontal: 5,
  },
  smallInputGroup: {
    width: 80,
    marginHorizontal: 5,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 6,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  cardNumberDisplay: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 6,
    paddingHorizontal: 0,
    letterSpacing: 0.3,
    width: '100%',
  },
  cvvDisplay: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 6,
    paddingHorizontal: 0,
    letterSpacing: 0.3,
    width: '100%',
  },
  fullWidthInputGroup: {
    width: '100%',
    marginBottom: 12,
    paddingHorizontal: 5,
  },
  cardHolderDisplay: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 6,
    paddingHorizontal: 0,
    height: 35,
    letterSpacing: 0.3,
  },
  expiryDisplay: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 6,
    paddingHorizontal: 0,
    letterSpacing: 0.3,
  },
  zipcodeDisplay: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 6,
    paddingHorizontal: 0,
    letterSpacing: 0.3,
  },
  cardBadge: {
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },
  cardBadgeText: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  scrollContainer: {
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  cardWrapper: {
    width: 350,
    height: 240,
    marginRight: 10,
  },
  mainCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

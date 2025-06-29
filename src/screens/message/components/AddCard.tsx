import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

interface AddCardProps {
  onPress?: () => void;
}

const AddCard = ({ onPress }: AddCardProps) => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [zipcode, setZipcode] = useState('');

  const formatCardNumber = (text: string) => {
    // Remove all non-digits
    const cleaned = text.replace(/\D/g, '');
    // Add spaces every 4 digits
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted;
  };

  const formatExpiry = (text: string) => {
    // Remove all non-digits
    const cleaned = text.replace(/\D/g, '');
    // Add slash after 2 digits
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const validateCard = () => {
    if (!cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
      Alert.alert('Invalid Card', 'Please enter a valid 16-digit card number');
      return false;
    }
    if (!cvv.match(/^\d{3,4}$/)) {
      Alert.alert('Invalid CVV', 'Please enter a valid 3 or 4 digit CVV');
      return false;
    }
    if (!cardHolderName.trim()) {
      Alert.alert('Invalid Name', 'Please enter the card holder name');
      return false;
    }
    if (!expiry.match(/^\d{2}\/\d{2}$/)) {
      Alert.alert('Invalid Expiry', 'Please enter expiry date in MM/YY format');
      return false;
    }
    if (!zipcode.match(/^\d{5,10}$/)) {
      Alert.alert('Invalid Zip Code', 'Please enter a valid zip code');
      return false;
    }
    return true;
  };

  const handleSaveCard = () => {
    if (validateCard()) {
      Alert.alert(
        'Success', 
        'Card saved successfully!',
        [
          {
            text: 'OK',
            onPress: () => {
              setShowCardForm(false);
              // Reset form
              setCardNumber('');
              setCvv('');
              setCardHolderName('');
              setExpiry('');
              setZipcode('');
            }
          }
        ]
      );
    }
  };

  const handleCardNumberChange = (text: string) => {
    const formatted = formatCardNumber(text);
    setCardNumber(formatted);
  };

  const handleExpiryChange = (text: string) => {
    const formatted = formatExpiry(text);
    setExpiry(formatted);
  };

  const handleCardPress = () => {
    if (onPress) {
      onPress(); // Use the external onPress if provided
    } else {
      setShowCardForm(true); // Use internal state if no external onPress
    }
  };

  if (showCardForm) {
    return (
      <View style={styles.atmContainer}>
        <View style={styles.atmHeader}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => setShowCardForm(false)}
          >
            <Icon name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.atmTitle}>Add New Card</Text>
        </View>
        
        <View style={styles.cardForm}>
          <View style={styles.cardPreview}>
            <View style={styles.cardHeader}>
              <Icon name="credit-card" size={32} color="#FFF" />
              <Text style={styles.cardType}>VISA</Text>
            </View>
            
            <Text style={styles.cardNumberDisplay}>
              {cardNumber || '**** **** **** ****'}
            </Text>
            
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.cardLabel}>CARD HOLDER</Text>
                <Text style={styles.cardValue}>
                  {cardHolderName || 'YOUR NAME'}
                </Text>
              </View>
              <View>
                <Text style={styles.cardLabel}>EXPIRES</Text>
                <Text style={styles.cardValue}>
                  {expiry || 'MM/YY'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Card Number</Text>
              <TextInput
                style={styles.input}
                value={cardNumber}
                onChangeText={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                placeholderTextColor="#999"
                keyboardType="numeric"
                maxLength={19}
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                <Text style={styles.inputLabel}>CVV</Text>
                <TextInput
                  style={styles.input}
                  value={cvv}
                  onChangeText={setCvv}
                  placeholder="123"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  maxLength={4}
                  secureTextEntry
                />
              </View>
              <View style={[styles.inputGroup, { flex: 1, marginLeft: 10 }]}>
                <Text style={styles.inputLabel}>Expiry</Text>
                <TextInput
                  style={styles.input}
                  value={expiry}
                  onChangeText={handleExpiryChange}
                  placeholder="MM/YY"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  maxLength={5}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Card Holder Name</Text>
              <TextInput
                style={styles.input}
                value={cardHolderName}
                onChangeText={setCardHolderName}
                placeholder="John Doe"
                placeholderTextColor="#999"
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Zip Code</Text>
              <TextInput
                style={styles.input}
                value={zipcode}
                onChangeText={setZipcode}
                placeholder="12345"
                placeholderTextColor="#999"
                keyboardType="numeric"
                maxLength={10}
              />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveCard}>
              <Text style={styles.saveButtonText}>Save Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.addCardContainer}>
        <View style={styles.plusIcon}>
          <Icon name="plus" size={24} color="#FFF" />
        </View>
        <Text style={styles.addCardText}>Add a new card</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  addCardContainer: {
    width: 350,
    height: 240,
    backgroundColor: '#faf3f0',
    marginTop: 30,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#f7b092',
  },
  plusIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#e85c20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  addCardText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#993308',
  },
  atmContainer: {
    width: 350,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginTop: 30,
    elevation: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  atmHeader: {
    backgroundColor: '#2d2d2d',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  atmTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  cardForm: {
    padding: 20,
  },
  cardPreview: {
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#444',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardType: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cardNumberDisplay: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: '#999',
    fontSize: 10,
    marginBottom: 4,
  },
  cardValue: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#444',
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    padding: 12,
    color: '#FFF',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  saveButton: {
    backgroundColor: '#e85c20',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

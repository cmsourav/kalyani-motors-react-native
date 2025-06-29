import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useRef, useMemo, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'

interface MainCardProps {
  onCardVerified?: (cardData: {
    id: string;
    cardNumber: string;
    cardHolderName: string;
    expiry: string;
    cvv: string;
    zipcode: string;
  }) => void;
}

const MainCard = ({ onCardVerified }: MainCardProps) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  // Animation values for dots
  const dot1Opacity = useRef(new Animated.Value(0.3)).current;
  const dot2Opacity = useRef(new Animated.Value(0.3)).current;
  const dot3Opacity = useRef(new Animated.Value(0.3)).current;

  // Create refs for each input field
  const cardNumberRef = useRef<TextInput>(null);
  const cvvRef = useRef<TextInput>(null);
  const cardHolderNameRef = useRef<TextInput>(null);
  const expiryRef = useRef<TextInput>(null);
  const zipcodeRef = useRef<TextInput>(null);

  // Animate dots when verifying
  useEffect(() => {
    if (isVerifying) {
      const animateDots = () => {
        Animated.sequence([
          Animated.parallel([
            Animated.timing(dot1Opacity, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(dot2Opacity, {
              toValue: 0.3,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(dot3Opacity, {
              toValue: 0.3,
              duration: 600,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(dot1Opacity, {
              toValue: 0.3,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(dot2Opacity, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(dot3Opacity, {
              toValue: 0.3,
              duration: 600,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(dot1Opacity, {
              toValue: 0.3,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(dot2Opacity, {
              toValue: 0.3,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(dot3Opacity, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
          ]),
        ]).start(() => {
          if (isVerifying) {
            animateDots();
          }
        });
      };
      animateDots();
    } else {
      // Reset dots when not verifying
      dot1Opacity.setValue(0.3);
      dot2Opacity.setValue(0.3);
      dot3Opacity.setValue(0.3);
    }
  }, [isVerifying]);

  // Check if all fields are filled
  const isAllFieldsFilled = useMemo(() => {
    const cleanedCardNumber = cardNumber.replace(/\s/g, '');
    return (
      cleanedCardNumber.length === 16 &&
      cvv.length === 3 &&
      cardHolderName.trim().length > 0 &&
      expiry.length === 5 &&
      zipcode.length >= 5
    );
  }, [cardNumber, cvv, cardHolderName, expiry, zipcode]);

  // Validation functions
  const validateCardNumber = (number: string) => {
    const cleaned = number.replace(/\s/g, '');
    if (cleaned.length === 0) {
      Alert.alert('Validation Error', 'Card number is required');
      return false;
    }
    if (cleaned.length < 16) {
      Alert.alert('Validation Error', 'Card number must be 16 digits');
      return false;
    }
    if (!/^\d{16}$/.test(cleaned)) {
      Alert.alert('Validation Error', 'Card number must contain only digits');
      return false;
    }
    return true;
  };

  const validateCvv = (cvv: string) => {
    if (cvv.length === 0) {
      Alert.alert('Validation Error', 'CVV is required');
      return false;
    }
    if (cvv.length < 3) {
      Alert.alert('Validation Error', 'CVV must be 3 digits');
      return false;
    }
    if (!/^\d{3}$/.test(cvv)) {
      Alert.alert('Validation Error', 'CVV must contain only digits');
      return false;
    }
    return true;
  };

  const validateCardHolderName = (name: string) => {
    if (name.length === 0) {
      Alert.alert('Validation Error', 'Card holder name is required');
      return false;
    }
    if (name.length < 2) {
      Alert.alert('Validation Error', 'Name must be at least 2 characters');
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      Alert.alert('Validation Error', 'Name can only contain letters and spaces');
      return false;
    }
    return true;
  };

  const validateExpiry = (expiry: string) => {
    if (expiry.length === 0) {
      Alert.alert('Validation Error', 'Expiry date is required');
      return false;
    }
    if (expiry.length < 5) {
      Alert.alert('Validation Error', 'Expiry date must be MM/YY format');
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      Alert.alert('Validation Error', 'Invalid expiry date format');
      return false;
    }
    
    // Check if month is valid (01-12)
    const [month, year] = expiry.split('/');
    const monthNum = parseInt(month);
    if (monthNum < 1 || monthNum > 12) {
      Alert.alert('Validation Error', 'Invalid month (01-12)');
      return false;
    }
    
    // Check if not expired
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    const expYear = parseInt(year);
    const expMonth = parseInt(month);
    
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      Alert.alert('Validation Error', 'Card has expired');
      return false;
    }
    
    return true;
  };

  const validateZipcode = (zip: string) => {
    if (zip.length === 0) {
      Alert.alert('Validation Error', 'Zip code is required');
      return false;
    }
    if (zip.length < 5) {
      Alert.alert('Validation Error', 'Zip code must be at least 5 digits');
      return false;
    }
    if (!/^\d{5,6}$/.test(zip)) {
      Alert.alert('Validation Error', 'Zip code must contain only digits');
      return false;
    }
    return true;
  };

  // Format card number with spaces every 4 digits
  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\s/g, '');
    if (cleaned.length <= 16) {
      const groups = cleaned.match(/.{1,4}/g) || [];
      return groups.join(' ');
    }
    return cardNumber; // Keep current value if exceeds 16 digits
  };

  // Handle card number change
  const handleCardNumberChange = (text: string) => {
    const formatted = formatCardNumber(text);
    setCardNumber(formatted);
    
    // Auto-focus to CVV when card number is complete (16 digits)
    const cleaned = formatted.replace(/\s/g, '');
    if (cleaned.length === 16) {
      validateCardNumber(formatted);
      cvvRef.current?.focus();
    }
  };

  // Handle CVV change (max 3 digits)
  const handleCvvChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length <= 3) {
      setCvv(cleaned);
      
      // Auto-focus to card holder name when CVV is complete (3 digits)
      if (cleaned.length === 3) {
        validateCvv(cleaned);
        cardHolderNameRef.current?.focus();
      }
    }
  };

  // Handle card holder name change (max 20 characters)
  const handleCardHolderNameChange = (text: string) => {
    if (text.length <= 20) {
      setCardHolderName(text);
    }
  };

  // Format expiry date as MM/YY
  const formatExpiryDate = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length <= 4) {
      if (cleaned.length >= 2) {
        return cleaned.slice(0, 2) + '/' + cleaned.slice(2);
      }
      return cleaned;
    }
    return expiry; // Keep current value if exceeds 4 digits
  };

  // Handle expiry date change
  const handleExpiryChange = (text: string) => {
    const formatted = formatExpiryDate(text);
    
    // If the formatted text is complete (MM/YY format), validate it
    if (formatted.length === 5) {
      const [month, year] = formatted.split('/');
      const monthNum = parseInt(month);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      const expYear = parseInt(year);
      const expMonth = parseInt(month);
      
      // Check if month is valid (01-12)
      if (monthNum < 1 || monthNum > 12) {
        Alert.alert('Validation Error', 'Invalid month (01-12)');
        return; // Don't update state, keep current value
      }
      
      // Check if the date is in the past
      if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        Alert.alert('Validation Error', 'Card has expired');
        return; // Don't update state, keep current value
      }
      
      // If validation passes, update state and move to next field
      setExpiry(formatted);
      zipcodeRef.current?.focus();
    } else {
      // If not complete yet, allow the user to continue typing
      setExpiry(formatted);
    }
  };

  // Handle expiry date blur
  const handleExpiryBlur = () => {
    if (expiry.length === 5) {
      const [month, year] = expiry.split('/');
      const monthNum = parseInt(month);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      const expYear = parseInt(year);
      const expMonth = parseInt(month);
      
      if (monthNum < 1 || monthNum > 12) {
        Alert.alert('Validation Error', 'Invalid month (01-12)');
        return;
      }
      
      if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        Alert.alert('Validation Error', 'Card has expired');
        return;
      }
    }
  };

  // Handle zipcode change
  const handleZipcodeChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length <= 6) {
      setZipcode(cleaned);
    }
  };

  const handleArrowPress = () => {
    if (isAllFieldsFilled && !isVerifying) {
      setIsVerifying(true);
      // Simulate card verification process
      setTimeout(() => {
        setIsVerifying(false);
        // Call onCardVerified with the card data
        if (onCardVerified) {
          onCardVerified({
            id: Date.now().toString(),
            cardNumber: cardNumber.replace(/\s/g, ''),
            cardHolderName: cardHolderName.trim(),
            expiry: expiry,
            cvv: cvv,
            zipcode: zipcode,
          });
        }
      }, 3000); // 3 seconds delay
    }
  };

  return (
    <View>
      <View style={styles.addCardContainer}>
        {/* Round arrow box positioned at right side center */}
        <TouchableOpacity 
          style={[
            styles.arrowBox,
            { backgroundColor: isAllFieldsFilled ? '#4CAF50' : '#666666' }
          ]}
          onPress={handleArrowPress}
          disabled={!isAllFieldsFilled || isVerifying}
        >
          <Icon name="arrow-right" size={20} color="#FFF" />
        </TouchableOpacity>

        {isVerifying ? (
          // Loading state - hide all form elements
          <View style={styles.loadingContainer}>
            <View style={styles.loadingIndicator}>
              <Animated.View style={[styles.dot, { opacity: dot1Opacity }]} />
              <Animated.View style={[styles.dot, { opacity: dot2Opacity }]} />
              <Animated.View style={[styles.dot, { opacity: dot3Opacity }]} />
            </View>
            <Text style={styles.loadingText}>Verifying your card</Text>
          </View>
        ) : (
          // Normal form state
          <>
            {/* Card Number and CVV Row */}
            <View style={styles.row}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Card Number</Text>
                <TextInput
                  style={styles.cardNumberInput}
                  value={cardNumber}
                  onChangeText={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  keyboardType="numeric"
                  maxLength={19}
                  ref={cardNumberRef}
                />
              </View>
              <View style={styles.smallInputGroup}>
                <Text style={styles.inputLabel}>CVV</Text>
                <TextInput
                  style={styles.cvvInput}
                  value={cvv}
                  onChangeText={handleCvvChange}
                  placeholder="123"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  keyboardType="numeric"
                  maxLength={4}
                  secureTextEntry
                  ref={cvvRef}
                />
              </View>
            </View>

            {/* Card Holder Name - Full Width */}
            <View style={styles.fullWidthInputGroup}>
              <Text style={styles.inputLabel}>Card Holder Name</Text>
              <TextInput
                style={styles.fullWidthInput}
                value={cardHolderName}
                onChangeText={handleCardHolderNameChange}
                placeholder="John Doe"
                placeholderTextColor="rgba(255,255,255,0.5)"
                autoCapitalize="words"
                ref={cardHolderNameRef}
              />
            </View>

            {/* Expiry, Zipcode, and Card Badge Row */}
            <View style={styles.row}>
              <View style={styles.smallInputGroup}>
                <Text style={styles.inputLabel}>Expiry Date</Text>
                <TextInput
                  style={styles.smallInput}
                  value={expiry}
                  onChangeText={handleExpiryChange}
                  placeholder="MM/YY"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  keyboardType="numeric"
                  maxLength={5}
                  ref={expiryRef}
                  onBlur={handleExpiryBlur}
                />
              </View>
              <View style={styles.smallInputGroup}>
                <Text style={styles.inputLabel}>Zip Code</Text>
                <TextInput
                  style={styles.smallInput}
                  value={zipcode}
                  onChangeText={handleZipcodeChange}
                  placeholder="12345"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  keyboardType="numeric"
                  maxLength={6}
                  ref={zipcodeRef}
                />
              </View>
              <View style={styles.cardBadge}>
                <Text style={styles.cardBadgeText}>VISA</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  )
}

export default MainCard

const styles = StyleSheet.create({
    addCardContainer: {
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
      inputLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: 6,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
      },
      input: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 0.4,
        borderBottomColor: 'rgba(255,255,255,0.6)',
        color: '#FFF',
        fontSize: 15,
        fontWeight: '500',
        paddingVertical: 6,
        paddingHorizontal: 0,
        letterSpacing: 0.3,
      },
      cardNumberInput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 0.4,
        borderBottomColor: 'rgba(255,255,255,0.6)',
        color: '#FFF',
        fontSize: 15,
        fontWeight: '500',
        paddingVertical: 6,
        paddingHorizontal: 0,
        letterSpacing: 0.3,
        width: '100%',
      },
      cvvInput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 0.4,
        borderBottomColor: 'rgba(255,255,255,0.6)',
        color: '#FFF',
        fontSize: 15,
        fontWeight: '500',
        paddingVertical: 6,
        paddingHorizontal: 0,
        letterSpacing: 0.3,
        width: '100%',
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
      fullWidthInputGroup: {
        width: '100%',
        marginBottom: 12,
        paddingHorizontal: 5,
      },
      fullWidthInput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 0.4,
        borderBottomColor: 'rgba(255,255,255,0.6)',
        color: '#FFF',
        fontSize: 15,
        fontWeight: '500',
        paddingVertical: 6,
        paddingHorizontal: 0,
        height: 35,
        letterSpacing: 0.3,
      },
      smallInputGroup: {
        width: 80,
        marginHorizontal: 5,
      },
      smallInput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 0.4,
        borderBottomColor: 'rgba(255,255,255,0.6)',
        color: '#FFF',
        fontSize: 15,
        fontWeight: '500',
        paddingVertical: 6,
        paddingHorizontal: 0,
        letterSpacing: 0.3,
      },
      arrowBox: {
        position: 'absolute',
        right: -20,
        top: '50%',
        transform: [{ translateY: -20 }],
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      loadingIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#FFF',
        marginHorizontal: 2,
      },
      loadingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 12,
      },
})
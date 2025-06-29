# AddCard Component

## Overview
The AddCard component provides an interactive card addition interface with an ATM-like design. It allows users to enter credit card details in a secure and user-friendly manner.

## Features

### Initial State
- Displays a clickable card with a plus icon
- Orange-themed design matching the app's color scheme
- Prompts user to "Add a new card"

### Card Details Form
When clicked, the component expands to show a comprehensive card entry form with:

1. **Card Number Input**
   - Auto-formats with spaces every 4 digits
   - Validates 16-digit card numbers
   - Real-time preview on the card display

2. **CVV Input**
   - Secure text entry (hidden characters)
   - Supports 3-4 digit CVV codes
   - Numeric keyboard only

3. **Card Holder Name**
   - Text input with word capitalization
   - Real-time preview on card display

4. **Expiry Date**
   - Auto-formats as MM/YY
   - Numeric keyboard only
   - Real-time preview on card display

5. **Zip Code**
   - Numeric input
   - Supports 5-10 digit zip codes

### ATM-Like Design
- Dark theme with professional appearance
- Card preview that updates in real-time
- Elevated containers with subtle borders
- Consistent spacing and typography

### Validation
- Card number must be exactly 16 digits
- CVV must be 3-4 digits
- Card holder name is required
- Expiry must be in MM/YY format
- Zip code must be 5-10 digits

### User Experience
- Back button to return to initial state
- Form resets after successful save
- Alert dialogs for validation errors
- Success confirmation on save

## Usage

```tsx
import AddCard from './components/AddCard';

const MessageScreen = () => {
  return (
    <View>
      <AddCard />
      {/* Other components */}
    </View>
  );
};
```

## Styling
The component uses a dark ATM-inspired theme:
- Primary background: `#1a1a1a`
- Secondary background: `#2d2d2d`
- Accent color: `#e85c20`
- Text colors: `#FFF`, `#999`
- Borders: `#444`, `#333`

## State Management
The component manages its own state for:
- Form visibility toggle
- All input field values
- Validation status

## Future Enhancements
- Card type detection (Visa, Mastercard, etc.)
- Camera integration for card scanning
- Biometric authentication
- Integration with payment gateways
- Card storage and management 
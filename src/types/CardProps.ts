
interface AddCardProps {
  onPress?: () => void;
}


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
import { Alert } from 'react-native';
import { API_URL, LOCAL_URL } from './Config';

export async function fetchPublishableKey(
  paymentMethod?: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `${LOCAL_URL}/stripe-key?paymentMethod=${paymentMethod}`
    );

    const { publishableKey } = await response.json();
    console.log(publishableKey)

    return publishableKey;
  } catch (e) {
    console.warn('Unable to fetch publishable key. Is your server running?');
    Alert.alert(
      'Error',
      'Unable to fetch publishable key. Is your server running?'
    );
    return null;
  }
}

import { Platform } from 'react-native';

// Address to stripe server running on local machine
export const LOCAL_URL =
Platform.OS === 'android' ? 'http://192.168.84.81:3000/' : 'http://192.168.84.81:3000/';

export const API_URL = "https://expo-stripe-server-example.glitch.me";
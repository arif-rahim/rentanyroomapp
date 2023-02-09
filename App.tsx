import React,{useRef,useEffect} from 'react'; 
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Auth from './src/navigation/AuthStack';
import Drawer from './src/navigation/DrawerMenu';
import SearchResult from './src/screens/search-result';
import ListingDetail from './src/screens/listing-detail';
import InstantBookingForm from './src/screens/instant-booking-form.tsx';
import PaymentsUICompleteScreen from './src/screens/payment/stripe/PaymentsUICompleteScreen';
import InvoiceDetailPage from './src/screens/dashboard/detail-pages/invoice-detail';
import MessagingPage from './src/screens/dashboard/messages';
import * as SecureStore from 'expo-secure-store';
declare global {
  var userid: string;
}

export default function App() {
  useEffect(() => {
        
    const bootstrapAsync = async () => {
        let fetchData: any;
        try {
            fetchData = await SecureStore.getItemAsync('userid');
            global.userid = fetchData;
        } catch (e) {
        }


    };
    bootstrapAsync();
  }, []); 
  
  return (
   
    <NavigationContainer>
      
      <Auth />
      {/* <Drawer /> */}
      {/* <SearchResult /> */}
      {/* <ListingDetail /> */}
      {/* <PaymentsUICompleteScreen /> */}
      {/* <InvoiceDetailPage /> */}
      {/* <MessagingPage /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

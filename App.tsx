import React,{useRef,useEffect,useState} from 'react'; 
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
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import axios from "axios";
import Api from "./src/ApiUrl";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


declare global {
  var userid: string;
  var username: string;
  var site_logo: string;
}

export default function App() {
  
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [sitelogo, setSitelogo] = useState('https://staging.webpenter.com/wp-content/uploads/2019/01/homey-logo.png');
 
  const bootstrapAsync = async () => {
    let fetchData: any;
    let fetchname: any;
    try {
        fetchData = await SecureStore.getItemAsync('userid');
        global.userid = fetchData;
        fetchname = await SecureStore.getItemAsync('username');
        global.username= fetchname;
    } catch (e) {
    }


};
  useEffect(() => {
    
  bootstrapAsync();
}, [ bootstrapAsync]); 

  useEffect(() => {

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
     
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };

    
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

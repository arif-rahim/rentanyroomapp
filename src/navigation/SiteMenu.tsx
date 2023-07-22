import React,{useEffect,useState} from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import ProfileTabNavigator from './ProfileTabNavigator';
import Sidebar from './Sidebar';
import Home from '../screens/home/Home';
import ReservarionPage from '../screens/dashboard/reservation';
import BookingPage from '../screens/dashboard/booking';
import InvoicingPage from '../screens/dashboard/invoices';
import MessagingPage from '../screens/dashboard/messages';
import WalletPage from '../screens/dashboard/wallet';
import SignupScreen  from "../screens/auth/SignupScreen";
import LoginScreen   from "../screens/auth/LoginScreen";

import ListingDetail from "../screens/listing-detail";
import axios from "axios";
import Api from "../ApiUrl";
const Drawer = createDrawerNavigator();

function SiteMenu() {

    const [sitelogo, setSitelogo] = useState();
    useEffect(() => {
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/site-logo/logo")
        .then(res => {
            setSitelogo(res.data);
        })
        .catch(err => {console.log(err)}); 
    }, []);
    //source={require('../assets/images/homey_logo.png')}
    return (
        <Drawer.Navigator
            drawerContent={(props) => <Sidebar {...props} />}
            detachInactiveScreens
        >

            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: () => <FontAwesome name='home' size={24} />,
                    headerTitleAlign: 'center',
                    headerTitle: () => <Image style={{resizeMode: 'contain', width: 130, height: 50 }}  source={require('../assets/images/homey_logo.png')}  />
                }}
            />
            <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{
                drawerIcon: () => <MaterialIcons name="login" size={24} color="black" />
            }}
        /> 

        <Drawer.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                    drawerIcon: () => <MaterialIcons name="link" size={24} color="black" />
                }}
            />

        </Drawer.Navigator>
    );
}


export default SiteMenu
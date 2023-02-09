import React from 'react';
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

const Drawer = createDrawerNavigator();

function DrawerMenu() {
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
                    headerTitle: () => <Image style={{ width: 130, height: 50 }} source={require('../assets/images/logo.png')} />
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileTabNavigator}
                options={{
                    drawerIcon: () => <Feather name="user" size={24} />
                }}
            />
            <Drawer.Screen
                name="Reservations"
                component={ReservarionPage}
                options={{
                    drawerIcon: () => <MaterialIcons name="apartment" size={24} color="black" />
                }}
            />
            <Drawer.Screen
                name="Booking"
                component={BookingPage}
                options={{
                    drawerIcon: () => <MaterialIcons name="apartment" size={24} color="black" />
                }}
            /> 
            <Drawer.Screen
                name="Invoices"
                component={InvoicingPage}
                options={{
                    drawerIcon: () => <FontAwesome5 name="file-invoice" size={24} color="black" />
                }}
            />
            <Drawer.Screen
                name="Messages"
                component={MessagingPage}
                options={{
                    drawerIcon: () => <MaterialIcons name="message" size={24} color="black" />
                }}
            />
            <Drawer.Screen
                name="Wallet"
                component={WalletPage}
                options={{
                    drawerIcon: () => <FontAwesome5 name="wallet" size={24} color="black" />
                }}
            />

        </Drawer.Navigator>
    );
}


export default DrawerMenu
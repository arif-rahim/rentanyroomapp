import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileComplete from "../screens/dashboard/profile/components/ProfileStatus";
import UploadImage from "../screens/dashboard/profile/components/UploadImage";
import InformationForm from "../screens/dashboard/profile/components/InformationForm";
import AddressForm from "../screens/dashboard/profile/components/AddressForm";
import EmergencyContactForm from "../screens/dashboard/profile/components/EmergencyContactForm";
import SocialMediaForm from "../screens/dashboard/profile/components/SocialMediaForm";

import styles from "../assets/styles/AuthStyle";

const Tab = createBottomTabNavigator();

const ProfileTabNavigator = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://staging.webpenter.com/wp-json/jwt-auth/v1/token/user_info?user_id=1")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    // console.log( 'itemsq');
    // console.log( items );
    
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarLabelStyle: {fontSize: 7},
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    
                },
            }}
            detachInactiveScreens
        >
            <Tab.Screen name="ProfileStatus" component={ProfileComplete}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ ...styles.alignCenter, flex: 0 }}>
                            <MaterialCommunityIcons name={focused ? "home-circle" : "home-circle-outline"} size={size} color={color} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="UploadImage" component={UploadImage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ ...styles.alignCenter, flex: 0 }}>
                            <Ionicons name={focused ? "cloud-upload" : "cloud-upload-outline"} size={size} color={color} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="InformationForm" component={InformationForm}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ ...styles.alignCenter, flex: 0 }}>
                            <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={size} color={color} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen initialParams={items} name="AddressForm" component={AddressForm} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ ...styles.alignCenter, flex: 0 }}>
                            <FontAwesome name={focused ? "address-card" : "address-card-o"} size={size} color={color} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="EmergencyForm" component={EmergencyContactForm}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ ...styles.alignCenter, flex: 0 }}>
                            <MaterialCommunityIcons name={focused ? "contacts" : "contacts-outline"} size={size} color={color} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="SocialMediaForm" component={SocialMediaForm}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ ...styles.alignCenter, flex: 0 }}>
                            <Ionicons name={focused ? "share-social" : "share-social-outline"} size={size} color={color} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}



export default ProfileTabNavigator;
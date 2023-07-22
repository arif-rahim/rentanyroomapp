import React, { useContext, useEffect, useState,useReducer } from "react";
import { View,StyleSheet, Text,Image } from "react-native";
import { Feather, FontAwesome,MaterialIcons } from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';
import { DrawerContentScrollView, DrawerItem, DrawerItemList,createDrawerNavigator } from "@react-navigation/drawer";
import styles from "../assets/styles/ProfileStyle";
import { AuthContext } from "../hooks/useAuthContext";
import { Avatar } from 'react-native-paper';
import WalletPage from '../screens/dashboard/wallet';
import axios from "axios";
import Api from "../ApiUrl";

const Drawer = createDrawerNavigator();
const Sidebar = (props) => {
    const initialState = {
        isLoading: true,
        inSignout: false,
        userToken: null,
    };
    
    const reducer = (preState: any, action: { type: any; token: any; }) => {
        switch (action.type) {
            case 'RESTORE_TOKEN':
                return {
                    ...preState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'SIGN_IN':
                return {
                    ...preState,
                    userToken: action.token,
                    isSignout: false,
                };
            case 'SIGN_OUT':
                return {
                    ...preState,
                    isSignout: true,
                    userToken: null,
                };
        }
    } 
    const { signOut } = useContext(AuthContext);
    const [userData, setUserData] = useState();
    const [username, setUserName] = useState();
    const [avatar, setUseAvatar] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [sitelogo, setSitelogo] = useState();
    useEffect(() => {
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/site-logo/logo")
        .then(res => {
            setSitelogo(res.data);
        })
        .catch(err => {console.log(err)}); 
    }, []);
    useEffect(() => {
        const bootstrapAsync = async () => {

            let fetchData: any;
            let fetchName: any;
            let fetchAvatar: any;
            let userToken;

            try {
                userToken = await SecureStore.getItemAsync('token');
                fetchData = await SecureStore.getItemAsync('email');
                setUserData(fetchData);
                fetchName = await SecureStore.getItemAsync('username');
                setUserName(fetchName);
                fetchAvatar = await SecureStore.getItemAsync('useravatar');
                setUseAvatar(fetchAvatar);
            } catch (e) {
                // Restoring token failed
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
        bootstrapAsync();
    }, []);

    return (
       
        <DrawerContentScrollView {...props}>
             {state.userToken == null ? <Image style={{resizeMode: 'contain', width: 130, height: 50 }} source={require('../assets/images/homey_logo.png')} /> :
            <View style={{ ...styles.alignCenter, height: 200, borderBottomWidth: .2, borderBottomColor: 'lightgrey', marginBottom: 10 }}>
                <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: "lightgrey" }}>
                    {/* <FontAwesome name="user-circle-o" size={100} color="white" /> */}
                    
                    <Avatar.Image style={style.testimonialThumb} size={100} source={{ uri: avatar}} />
                </View>
                <View style={styles.spacer} />
                <View style={{ ...styles.alignTextCenter, flex: 0 }}>
                    <Text style={{ fontSize: 20 }}>{username}</Text>
                    {/* <Text>{userData}</Text> */}
                </View>
            </View>}

            <DrawerItemList {...props} />
            {state.userToken == null ? 
           
            '' :
            <DrawerItem
                label="Logout"
                icon={() => <Feather name='log-out' size={24} />}
                onPress={() => signOut()}
            />}
        </DrawerContentScrollView> 
    );
}
const style = StyleSheet.create({
    testimonialThumb: {
        alignSelf: 'center',
        margin: 0
    }
});
export default Sidebar;
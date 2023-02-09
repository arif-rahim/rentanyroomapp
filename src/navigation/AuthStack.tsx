import React, { useReducer, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as SecureStore from 'expo-secure-store';

import SignupScreen  from "../screens/auth/SignupScreen";
import LoginScreen   from "../screens/auth/LoginScreen";
import ForgotScreen  from "../screens/auth/ForgotPasswordScreen";
import DrawerMenu    from "./DrawerMenu";
import SiteMenu    from "./SiteMenu";
import AuthIndicator from "../screens/OnBoardScreen";

import SearchResult from "../screens/search-result";

import { AuthContext } from "../hooks/useAuthContext";
import { useAuthMemo } from "../hooks/useAuthMemo";
import { EarningPage, PayoutPage } from "../screens/dashboard/wallet";
import ListingDetail from "../screens/listing-detail";
import InstantBookingForm from "../screens/payment/stripe/PaymentsUICompleteScreen";
import PaymentsUICompleteScreen from "../screens/payment/stripe/PaymentsUICompleteScreen";
import InvoiceDetailPage from "../screens/dashboard/detail-pages/invoice-detail";
import MessageDetail from "../screens/dashboard/detail-pages/message-detail";
import EarningDetailPage from "../screens/dashboard/detail-pages/earning-detail";
import ReservationDetailPage from "../screens/dashboard/detail-pages/reservation-detail";

const Stack = createStackNavigator();

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

function Auth() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await SecureStore.getItemAsync('token');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = useAuthMemo(dispatch);

    if (state.isLoading) {
        return <AuthIndicator />
    }

    return (
        <AuthContext.Provider value={authContext}>
            <Stack.Navigator 
                screenOptions={{
                    presentation: 'modal',
                    headerShown: false
                }}
                detachInactiveScreens
            >
                {state.userToken == null ? (
                    <Stack.Group>
                        
                         <Stack.Screen name="Drawer" component={SiteMenu} />
                         <Stack.Screen 
                            name="PaymentsUIScreen" 
                            component={PaymentsUICompleteScreen} 
                            
                            />
                        <Stack.Screen 
                            name="ListingDetailPage" 
                            component={ListingDetail} 
                            options={{
                                headerShown: true,
                                headerTitle: 'Listing Detail'
                            }} />
                        <Stack.Screen 
                            name="InstantBookingForm" 
                            component={InstantBookingForm} 
                            options={{
                                headerShown: true,
                                headerTitle: 'Listing Detail'
                            }} />    
                        <Stack.Screen 
                            name="SearchResultPage" 
                            component={SearchResult} 
                            options={{
                                headerShown: true,
                                headerTitle: 'Search Result'
                            }} />    
                    </Stack.Group>
                    
                ) : (
                    <Stack.Group>
                        <Stack.Screen name="Drawer" component={DrawerMenu} />
                        <Stack.Screen 
                            name="SearchResultPage" 
                            component={SearchResult} 
                            options={{
                                headerShown: true,
                                headerTitle: 'Search Result'
                            }} />
                         <Stack.Screen 
                            name="ListingDetailPage" 
                            component={ListingDetail} 
                            options={{
                                headerShown: true,
                                headerTitle: 'Listing Detail'
                            }} />
                        <Stack.Screen 
                            name="InstantBookingForm" 
                            component={InstantBookingForm} 
                            options={{
                                headerShown: true,
                                headerTitle: 'Listing Detail'
                            }} />    
                        <Stack.Screen 
                            name="PaymentsUIScreen" 
                            component={PaymentsUICompleteScreen} />
                        <Stack.Screen 
                            name="InvoiceDetailPage" 
                            component={InvoiceDetailPage} />
                        <Stack.Screen 
                            name="MessageDetailPage" 
                            component={MessageDetail} />
                        <Stack.Screen 
                            name="EarningPage" 
                            component={EarningPage} />
                        <Stack.Screen 
                            name="PayoutPage" 
                            component={PayoutPage} />
                        <Stack.Screen 
                            name="EarningDetailPage" 
                            component={EarningDetailPage} />
                        <Stack.Screen  
                            name="ReservationDetailPage" 
                            component={ReservationDetailPage} />

                    </Stack.Group>
                )}


            </Stack.Navigator>
        </AuthContext.Provider>
    );
}

export default Auth
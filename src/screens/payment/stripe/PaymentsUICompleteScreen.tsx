import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import Button from './components/Button';
import PaymentScreen from './components/PaymentScreen';
import { API_URL, LOCAL_URL } from './config/Config';
import BookingInfo from '../../instant-booking-form.tsx/components/BookingInfo';
import RulesAndPolicies from '../../instant-booking-form.tsx/components/RulesAndPolicies';
import SelectPayment from '../../instant-booking-form.tsx/components/SelectPayment';
import StartBooking from '../../instant-booking-form.tsx/components/StartBooking';

export default function PaymentsUICompleteScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
    const [loading, setLoadng] = useState(false);
    const [clientSecret, setClientSecret] = useState<string>();

    const fetchPaymentSheetParams = async () => {
        const response = await fetch(`${LOCAL_URL}/payment-sheet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 1500
            })
        });
        const { paymentIntent, ephemeralKey, customer } = await response.json();
        setClientSecret(paymentIntent);
        return {
            paymentIntent,
            ephemeralKey,
            customer,
        };
    };

    const openPaymentSheet = async () => {
        if (!clientSecret) {
            return;
        }
        setLoadng(true);
        const { error } = await presentPaymentSheet();

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'The payment was confirmed successfully');
        }
        setPaymentSheetEnabled(false);
        setLoadng(false);
    };

    const initialisePaymentSheet = async () => {
        const {
            paymentIntent,
            ephemeralKey,
            customer,
        } = await fetchPaymentSheetParams();

        const { error } = await initPaymentSheet({
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            customFlow: false,
            merchantDisplayName: 'Example Inc.',
            style: 'alwaysDark',
        });
        if (!error) {
            setPaymentSheetEnabled(true);
        }
    };

    useEffect(() => {
        // In your app’s checkout, make a network request to the backend and initialize PaymentSheet.
        // To reduce loading time, make this request before the Checkout button is tapped, e.g. when the screen is loaded.
        initialisePaymentSheet();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PaymentScreen>
            <BookingInfo />
            <StartBooking />
            <RulesAndPolicies />
            <SelectPayment />

            <View style={{ height: 20 }} />

            <View style={{ marginLeft: 25, marginRight: 25, elevation: 5, backgroundColor: 'white', borderRadius: 12 }}>
                <Button
                    variant="primary"
                    loading={loading}
                    disabled={!paymentSheetEnabled}
                    title="Checkout"
                    onPress={openPaymentSheet}
                />
            </View>
            <View style={{ height: 50 }} />
        </PaymentScreen>
    );
}
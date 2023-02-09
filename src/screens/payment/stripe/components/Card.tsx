import React, {useState} from "react";
import { Button, ScrollView, StyleSheet, View,Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { LOCAL_URL } from "../config/Config";
import { colors } from '../config/colors';

export default function Card (){
    const {confirmPayment, loading}=useConfirmPayment();
    const handlePayPress = async () => {
        Alert.alert('Success')
        const response = await fetch(`${LOCAL_URL}/create-payment-intent`, {
            method: 'POST',
            headers :{
                'content-type' : 'applicaton/json'
            },
            body: JSON.stringify({
                paymentMethodType:'card',
                currency:'usd'
            })
        })
        const {clientsecret}= await response.json()
        const {error, paymentIntent} = await confirmPayment(clientsecret, {
            type:'Card',
            billingDetails:'Arif'
        })
        if(error){
            Alert.alert(`Error code: ${error.code}`, error.message)
        } else if(paymentIntent){Alert.alert('Success')}
    }
    return (
        <View style={styles.container}>
            <CardField  style={styles.cardfield} />
            <Button title="Pay" onPress={handlePayPress}/>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    },
    cardfield:{
        width:'100%',
        height:50,
        marginVertical:30
    }
  });
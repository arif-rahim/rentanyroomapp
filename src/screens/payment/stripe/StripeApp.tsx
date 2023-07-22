import { useStripe } from "@stripe/stripe-react-native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator, ScrollView,SafeAreaView } from 'react-native';
import NumberFormat from "react-number-format";
import { useForm, Controller } from "react-hook-form";
import BookingInfo from '../../instant-booking-form.tsx/components/BookingInfo';
import RulesAndPolicies from '../../instant-booking-form.tsx/components/RulesAndPolicies';
import SelectPayment from '../../instant-booking-form.tsx/components/SelectPayment';
import StartBooking from '../../instant-booking-form.tsx/components/StartBooking';

export default function StripeApp(props) {
  const bookDetail= props.data;
  
    const [price, setPrice] = useState(50000);
  const [totalCoins, setTotalCoins] = useState(1.91342865);
  const [quantity, setQuantity] = useState("1");
  const [amount, setAmount] = useState(Number(quantity) * price);
  const stripe = useStripe();
  const SERVER_URL_HEROKU = "https://expo-bitcoin-purchase.herokuapp.com";
  const SERVER_URL_LOCAL = "http://127.0.0.1:6000";
  const SERVER_URL_METRO = "http://192.168.88.81:6000";

 
  useEffect(() => {
    setTimeout(() => {
      let newPrice;
      if (Math.random() > 0.5) {
        newPrice = Math.floor(price * 1.015);
        setPrice(newPrice);
      } else {
        newPrice = Math.floor(price * 0.985);
        setPrice(newPrice);
      }
    }, 5000);
  }, [price]);

 
  useEffect(() => {
    setAmount(price * Number(quantity));
  }, [quantity, price]);

  const { control, handleSubmit, formState: { errors } } = useForm();
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [cemail, setEmail] = useState('');

  const firstname = (value) => {
    setFirstname(value);
  };
  const lastName = (value) => {
    setLastname(value);
  };
  const email = (value) => {
    setEmail(value);
  };

  const buy = async () => {
    try {
      const finalAmount = parseInt(amount.toString(), 10);
      const response = await fetch(`${SERVER_URL_METRO}/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: first_name+' '+last_name,
          receipt_email: cemail,
          amount: props.data.total_price?props.data.total_price:'555',
          currency: 'AED',
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        return Alert.alert(data.message);
      }
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: "Bitcoin Buy",
      });
      if (initSheet.error) {
        // console.error(initSheet.error);
        return Alert.alert(initSheet.error.message);
      }
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: data.clientSecret,
      });
      if (presentSheet.error) {
        // console.error(presentSheet.error);
        return Alert.alert(presentSheet.error.message);
      }
      Alert.alert("Payment successfully! Thank you for the purchase.");
      // Update Bitcoin balance & total value
      setTotalCoins(totalCoins + parseInt(quantity, 10));
      // Reset quantity
      setQuantity("1");
    } catch (err) {
      // console.error(err);
      Alert.alert("Payment failed!");
    }
  };
  

  return (
    <SafeAreaView>
    <ScrollView>
   <BookingInfo data={bookDetail}/>
            <StartBooking  firstName={firstname} lastName={lastName} email={email}/>
            <RulesAndPolicies  data={bookDetail}/>
            <SelectPayment />
            <View style={{ height: 20 }} />

        {/* Buy button */}
        <TouchableOpacity
          key="Buy"
          onPress={buy}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>Process Payment</Text>
        </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "#0ecb81",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    marginTop: 70,
    minWidth: "48%",
    textAlign: "center",
    borderWidth: 0,
  },
  buttonLabel: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    color: "#333",
  },
  totalCoins: {
    fontSize: 28,
    color: "#333",
  },
  totalValue: {
    padding: 5,
    marginTop: 5,
  },
  value: {
    flexDirection: "row",
  },
  coin: {
    marginTop: 5,
    flex: 2,
    fontSize: 16,
  },
  coinBalance: {
    marginTop: 5,
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
  amount: {
    marginTop: 5,
    flex: 4,
    textAlign: "right",
    marginRight: 15,
  },
  textInput: {
    marginLeft: 18,
    padding: 10,
    borderColor: "black",
    borderWidth: 0.5,
    flex: 1,
  },
  balance: {
    marginTop: 5,
    flex: 1,
    textAlign: "left",
    marginRight: 15,
  },
});


import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";
import StripeApp from "./StripeApp";

export default function PaymentsUICompleteScreen(props) {
  const bookDetail= props.route.params;
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51NKaVzKmIXzPNYOVP5HytbrCa9WrbeVgU2OOmSnBEkbYDcNdHT72quTlLd5ju1qwWBjZbH1yishDGJfc2LvJUrBO00POh76EY5">
        <StripeApp data={bookDetail}/>
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
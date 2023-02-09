import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const Price = (item) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Prices</Text>
            <View>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Night:<Text style={styles.bold}> ${item.data.night_price}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Weekends (Sat & Sun):<Text style={styles.bold}> ${item.data.weekends_price}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Weekly (7d+):<Text style={styles.bold}> ${item.data.priceWeek}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Monthly (30d+):<Text style={styles.bold}> ${item.data.priceMonthly}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Security Deposit:<Text style={styles.bold}> ${item.data.security_deposit}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Additional Guests:<Text style={styles.bold}> ${item.data.additional_guests_price}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Allow Additional Guest:<Text style={styles.bold}> {item.data.allow_additional_guests}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Cleaning Fee:<Text style={styles.bold}> ${item.data.cleaning_fee}</Text> Per Stay
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Minimum Days of a Booking:<Text style={styles.bold}> {item.data.min_book_days}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Maximum Days of a Booking:<Text style={styles.bold}> {item.data.max_book_days}</Text>
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginTop: 30
    },
    text: {
        color: 'grey'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold',
        color: 'black'
    }
});


export default Price
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const Detail = (item) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Details</Text>
            <View>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  ID:<Text style={styles.bold}> {item.data.listing_id}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Guests:<Text style={styles.bold}> {item.data.guests}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Bedrooms:<Text style={styles.bold}> {item.data.bedrooms}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Beds:<Text style={styles.bold}> {item.data.beds}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Bathrooms:<Text style={styles.bold}> {item.data.baths}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Check-in After:<Text style={styles.bold}> {item.data.checkin_after}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Check-out Before:<Text style={styles.bold}> {item.data.checkout_before}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Type:<Text style={styles.bold}> {item.data.room_type} / {item.data.listing_type}</Text>
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Size:<Text style={styles.bold}> {item.data.listing_size} {item.data.listing_size_unit}</Text>
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


export default Detail
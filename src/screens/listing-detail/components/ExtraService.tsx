import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const ExtraService = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Extra Services</Text>
            <View>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Breakfast:<Text style={styles.bold}> $9.00</Text> Per Guest
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Lunch:<Text style={styles.bold}> $12.00</Text> Per Guest
                </Text>
                <Text style={styles.text}>
                    <FontAwesome name="angle-right" size={16} color="lightgrey" />  Dinner:<Text style={styles.bold}> $12.00</Text>
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


export default ExtraService
import React from "react";
import { StyleSheet, View, Text } from "react-native";


const AdditionalRules = (item) => {
    return (
        <View style={ styles.container }>
            <Text style={[styles.title, styles.bold]}>Additional Rules Information</Text>
            <Text style={ styles.text }>{item.data.additional_rules}</Text>
            <Text style={[styles.title, styles.bold]}>Cancellation Policy</Text>
            <Text style={ styles.text }>{item.data.cancellation_policy}</Text>
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
    bold: {
        fontWeight: 'bold'
    },
    text: {
        color: 'grey'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    }
});


export default AdditionalRules
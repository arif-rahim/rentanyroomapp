import React from "react";
import { StyleSheet, View, Text } from 'react-native';


const AboutListing = (item ) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                About this listing
            </Text>
            <Text style={ styles.description } key={item.data.description}>{item.data.description}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        textAlign: 'justify'
    }
});


export default AboutListing
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";


const BookingModuleFooter = () =>{
    return (
        <View style={ styles.container }>
            <Pressable android_ripple={{ color: 'lighgrey' }} style={ styles.button }>
                <Text style={ styles.buttonText } ><FontAwesome name="heart-o" size={14} color="black" /> Add to Favorite</Text>
            </Pressable>
            <Pressable android_ripple={{ color: 'lightgrey' }} style={ styles.button }>
                <Text style={ styles.buttonText } >Contact the host</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width / 1.2,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        margin: 10
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'grey'   
    }
});


export default BookingModuleFooter
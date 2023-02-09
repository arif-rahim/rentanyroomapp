import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const SocialIcons = () => {
    return (
        <View style={ styles.container }>
            <FontAwesome name="facebook" size={24} color="black" onPress={() => { console.log('han ki a') }} />
            <FontAwesome name="twitter" size={24} color="black" />
            <FontAwesome name="twitch" size={24} color="black" />
            <FontAwesome name="google" size={24} color="black" />
            <FontAwesome name="linkedin" size={24} color="black" />
            <FontAwesome name="pinterest" size={24} color="black" />
            <FontAwesome name="envelope" size={24} color="black" />
            <FontAwesome name="instagram" size={24} color="black" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: '#eee',
        height: 80
    }
});


export default SocialIcons
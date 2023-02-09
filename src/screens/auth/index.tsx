import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, StyleSheet } from "react-native";

import styles from "../../assets/styles/AuthStyle";

const index = props => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <StatusBar style="auto" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={require('../../assets/images/image-1440x960.png')} resizeMode="cover" style={styles.image}>
                
                    {props.children}

                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}



export default index
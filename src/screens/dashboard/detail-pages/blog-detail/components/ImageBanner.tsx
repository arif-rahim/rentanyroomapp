import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const ImageBanner = (item) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    console.log(item.data.url);

    return ( 
        <View style={styles.container}>
            <View style={[styles.card, styles.row, styles.align]}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={() => { navigation.goBack(); }} />
               
                </View>
            
        <ImageBackground
            source={{ uri: item.data.url }}
            style={styles.imageBackground}
            resizeMode='contain'
        >
        </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 20
    },
    imageBackground: {
        width: width,
        height: height / 3.1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    layer: {
        position: 'absolute',
        width: width,
        height: height / 3.1,
        backgroundColor: 'grey',
        opacity: .5
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 14,
        paddingBottom: 15
    },
    searchButton: {
        width: width / 1.35,
        height: 50,
        backgroundColor: 'white',
        paddingLeft: 20
    },
    row: {
        flexDirection: 'row'
    },
    align: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card: {
        width: Dimensions.get('screen').width - 40,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderRadius: 8,
        elevation: 6
    },
});

export default ImageBanner;
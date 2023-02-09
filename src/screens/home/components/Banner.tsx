import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';

const { width, height } = Dimensions.get('window');

const Banner = () => {
    return (
        <View>
            <ImageBackground style={ [styles.imageBackground, styles.container] } source={{ uri: 'https://demo01.gethomey.io/wp-content/uploads/2018/10/32-6.jpg' }} resizeMode='cover'>
                <View style={styles.card}>
                    <Text style={styles.heading}>Modern Apartment</Text>
                    <Text style={styles.price}>$79 at night</Text>
                    <Text style={styles.text}>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    imageBackground: {
        width: width,
        height: height / 1.1
    },
    card: {
        width: width / 1.5,
        height: height / 1.5,
        backgroundColor: 'white',
        marginLeft: 40,
        opacity: .85,
        justifyContent: 'center',
        padding: 20
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 8
    },
    text: {
        fontSize: 18,
        lineHeight: 25,
        margin: 8,
    },
    price: {
        fontSize: 24,
        margin: 8
    },
    button: {
        width: width / 3,
        height: 50,
        backgroundColor: Colors.light.buttonColor,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});



export default Banner;
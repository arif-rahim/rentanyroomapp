import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';

const { width, height } = Dimensions.get('window');

const Banner = ({navigation}) => {
    return (
        <View>
            <ImageBackground style={ [styles.imageBackground, styles.container] } source={{ uri: 'https://www.rentanyroom.com/wp-content/uploads/2023/06/bedroom-1872196_1920.jpg' }} resizeMode='cover'>
                <View style={styles.card}>
                    <Text style={styles.heading}>Rent any room anywhere in the world</Text>
                    {/* <Text style={styles.price}>$79 at night</Text> */}
                    <Text style={styles.text}>your premier destination for short to medium term stays and a wide range of rental options</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {  navigation.navigate('SearchResultPage', { 
                listings: {keyword: '',
                    arrive: '',
                    depart: '',
                    guest: '',
                    listing_type: '',},
            });}}>
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
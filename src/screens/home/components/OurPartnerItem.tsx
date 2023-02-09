import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');


const OurPartnerItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: item.testimonial }} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width / 2,
        height: 100,
        justifyContent: 'center',
        marginBottom: 10
    },
    imageView: {
        alignItems: 'center'
    },
    image: {
        width: width / 2 - 20,
        height: 100,
        borderRadius: 10
    }
});



export default OurPartnerItem;
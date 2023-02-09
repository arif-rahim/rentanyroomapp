import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const TrendingItem = ({ item={ url: '', name: '' } }) => {
    return (
        <View style={styles.imageCard}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <View style={styles.imageTitle}>
                <Text style={styles.title}> { item.name } </Text>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    imageCard: {
        width: width - 20,
        height: height / 1.8,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        marginTop: 10
    },
    image: {
        width: width - 20,
        height: height / 1.8,
        padding: 10,
        justifyContent: 'flex-end',
        borderRadius: 10
    },
    imageTitle: {
        width: width - 20,
        height: height / 1.8,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'white',
        margin: 26
    }  
});


export default TrendingItem;
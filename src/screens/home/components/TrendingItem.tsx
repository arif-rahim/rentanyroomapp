import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const TrendingItem = ({ item={ url: '', name: '' }}) => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => {  navigation.navigate('SearchResultPage', { 
            listings: {keyword: '',
                arrive: '',
                depart: '',
                guest: '',state: item.name,
            },
        });}}>
        <View style={styles.imageCard}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <View style={styles.imageTitle}>
                <Text style={styles.title}> { item.name } </Text>
            </View>
        </View>
        </TouchableOpacity>
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
        borderRadius: 10,
        resizeMode: 'cover',
        
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
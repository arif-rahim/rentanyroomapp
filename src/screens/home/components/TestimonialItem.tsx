import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-paper';


const TestimonialItem = ({ item }) => { 
    return (
        <View style={styles.container} >
            
            <Avatar.Image style={styles.testimonialThumb} size={42} source={{ uri: item.photo }} />
            <View style={styles.autherInfo}>
                <Text style={{ fontWeight: 'bold' }}>{ item.name } </Text>
                <Text style={{ fontStyle: 'italic' }}>Homey Host</Text>
            </View>
            {item.bio ?
            <Text style={styles.description}>{ item.bio }.</Text>:''}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginBottom: 50
    },
    description: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgrey',
        paddingTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 20
    },
    testimonialThumb: {
        alignSelf: 'center',
        margin: 10
    },
    autherInfo: {
        alignItems: 'center'
    }
});



export default TestimonialItem;


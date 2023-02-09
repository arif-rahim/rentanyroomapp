import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


const Specification = (item) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.box}>
                    <FontAwesome name="home" size={24} color="lightgrey" />
                    <Text style={{ color: 'grey' }}>Type</Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.data.room_type} / {item.data.listing_type}</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome name="user" size={24} color="lightgrey" />
                    <Text style={{ color: 'grey' }}>Accomodation</Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.data.guests} Guests</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                <View style={styles.box}>
                    <FontAwesome name="bed" size={24} color="lightgrey" />
                    <Text style={{ color: 'grey' }}>Bedrooms</Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.data.bedrooms} Bedrooms / {item.data.beds} Bed</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome name="shower" size={24} color="lightgrey" />
                    <Text style={{ color: 'grey' }}>Bathrooms</Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.data.baths} Baths</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        borderRadius: 20,
        width: Dimensions.get('screen').width - 30,
        elevation: 5,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 20,
    },
    box: {
        flex: 1,
        alignItems: 'center'
    }
});


export default Specification
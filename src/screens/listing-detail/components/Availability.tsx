import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Availability = (item) => {
    return (
        <View style={ styles.container }>
            <Text style={[ styles.title, styles.bold ]}>Availability</Text>
            <View style={{  }}>
                <Text  style={{ marginBottom: 10 }}>
                    <FontAwesome name="calendar" size={24} color="lightgrey" /> The minimum stay is <Text style={styles.bold}>{item.data.min_book_days} nights</Text>
                </Text>
                <Text>
                    <FontAwesome name="calendar" size={24} color="lightgrey" /> The maximum stay is <Text style={styles.bold}>{item.data.max_book_days} nights</Text>
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginTop: 30
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold',
        color: 'black'
    }
});


export default Availability
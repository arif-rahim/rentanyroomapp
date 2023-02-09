import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const Booking = ({ item, navigation }) => {
    //console.log(item.status);
    return (
        <List.Accordion title={`Reservation ${item.ID}`} id={item.ID}>
            <DataTable.Row>
                <DataTable.Cell>Author</DataTable.Cell>
                <DataTable.Cell numeric>
                
                <Avatar.Image style={styles.testimonialThumb} size={24} source={{ uri: item.photo}} />
                    </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>ID</DataTable.Cell>
                <DataTable.Cell numeric>#{item.ID}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Status</DataTable.Cell>
                <DataTable.Cell numeric>
                {item.status === 'booked' ? 
                    <View style={styles.booked}><Text style={{ color: 'white', fontSize: 12 }}>{item.status}</Text></View> : 
                    <View style={styles.declined}><Text style={{ color: 'white', fontSize: 12 }}>{item.status}</Text></View>}
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Date</DataTable.Cell>
                <DataTable.Cell numeric>{item.date}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Address</DataTable.Cell>
                <DataTable.Cell numeric textStyle={{ textAlign: 'right' }}>{item.photo}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Chech-in</DataTable.Cell>
                <DataTable.Cell numeric>{item.checkin}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Check-out</DataTable.Cell>
                <DataTable.Cell numeric>{item.checkout}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Guests</DataTable.Cell>
                <DataTable.Cell numeric>{item.guest}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Pets</DataTable.Cell>
                <DataTable.Cell numeric>{item.pets}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Subtotal</DataTable.Cell>
                <DataTable.Cell numeric>{item.price}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Actions</DataTable.Cell>
                <DataTable.Cell numeric>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('ReservationDetailPage',
    { itemId: item.ID}) }}>
                        <Text style={{ color: 'white' }}> Details </Text>
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>
        </List.Accordion>
    );
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 8,
        backgroundColor: '#54c4d9'
    },
    booked: {
        backgroundColor: '#85c341',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    pending: {
        backgroundColor: '#fcb900',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    declined: {
        backgroundColor: '#c31b1b',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    testimonialThumb: {
        alignSelf: 'center',
        margin: 0
    }
});


export default Booking;
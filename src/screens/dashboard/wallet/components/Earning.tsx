import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';


const Earning = ({ item, navigation }) => {
   
    return (
        <List.Accordion title={`Earning ${item.id}`} id={item.id}>
            <DataTable.Row>
                <DataTable.Cell>ID</DataTable.Cell>
                <DataTable.Cell numeric>#{item.id}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Date</DataTable.Cell>
                <DataTable.Cell numeric>{item.date}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Listing</DataTable.Cell>
                <DataTable.Cell numeric>{item.listing}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Service Fee</DataTable.Cell>
                <DataTable.Cell numeric>${item.services_fee}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Host Fee</DataTable.Cell>
                <DataTable.Cell numeric>${item.host_fee}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Net Amount</DataTable.Cell>
                <DataTable.Cell numeric>${item.net_earnings}</DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
                <DataTable.Cell>Actions</DataTable.Cell>
                <DataTable.Cell numeric>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('EarningDetailPage',{itemId: item.id}) }}>
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
    status: {
        backgroundColor: '#fcb900',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    }
});


export default Earning;
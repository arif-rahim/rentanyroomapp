import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';


const Payout = ({ item, navigation }) => {
    return (
        <List.Accordion title={`Payout ${item.id}`} id={item.id}>
            <DataTable.Row>
                <DataTable.Cell>Date Requested</DataTable.Cell>
                <DataTable.Cell numeric>10 Mar, 2019</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Amount</DataTable.Cell>
                <DataTable.Cell numeric>$9235.00</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Payment Method</DataTable.Cell>
                <DataTable.Cell numeric>Wire Transfer</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Status</DataTable.Cell>
                <DataTable.Cell numeric>
                    <View style={styles.status}>
                            <Text style={{ color: 'white', fontSize: 12 }}>Pending</Text>
                    </View>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Date Processed</DataTable.Cell>
                <DataTable.Cell numeric>12 Mar, 2019</DataTable.Cell>
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


export default Payout;
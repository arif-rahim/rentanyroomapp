import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';


const Invoice = ({ item, navigation }) => {
    return (
        <List.Accordion title={`Invoice ${item.id}`} id={item.id}>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold' }}>Order</DataTable.Cell>
                <DataTable.Cell textStyle={{ fontWeight: 'bold' }} numeric>#{item.order_id}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Date</DataTable.Cell>
                <DataTable.Cell numeric>{item.homey_date}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Billing For</DataTable.Cell>
                <DataTable.Cell numeric>{item.billion_for}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Billing Type</DataTable.Cell>
                <DataTable.Cell numeric>{item.billing_type}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Status</DataTable.Cell>
                <DataTable.Cell numeric>
                    <View style={styles.status}><Text style={{ color: 'white', fontSize: 12 }}>{item.invoice_status}</Text></View>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Payment Method</DataTable.Cell>
                <DataTable.Cell numeric>{item.payment_method}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Total</DataTable.Cell>
                <DataTable.Cell numeric>${item.upfront_payment}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Actions</DataTable.Cell>
                <DataTable.Cell numeric>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('InvoiceDetailPage',{itemId:item.id}) }}>
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
        backgroundColor: '#85c341',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    }
});


export default Invoice;
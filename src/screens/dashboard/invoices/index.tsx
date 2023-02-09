import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/header';
import Invoices from './components/invoices';


const InvoicingPage = () => {
    return (
        <View style={ styles.container }>
            <FlatList 
                data={null}
                ListHeaderComponent={Header}
                ListFooterComponent={Invoices}
                renderItem={null}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    }
});


export default InvoicingPage;
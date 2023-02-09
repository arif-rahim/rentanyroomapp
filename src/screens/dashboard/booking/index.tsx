import React from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import Footer from './footer';
import Header from './header';
import Bookings from './bookings';


const BookingPage = () => {
    return (
        <View style={ styles.container }>
            <FlatList 
                data={null}
                ListHeaderComponent={Header}
                ListEmptyComponent = {Bookings}
                ListFooterComponent={Footer}
                renderItem={null}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee'
    }
});


export default BookingPage;
import React from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import Footer from './components/footer';
import Header from './components/header';
import Reservations from './components/reservations';


const ReservarionPage = () => {
    return (
        <View style={ styles.container }>
            <FlatList 
                data={null}
                ListHeaderComponent={Header}
                ListEmptyComponent = {Reservations}
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


export default ReservarionPage;
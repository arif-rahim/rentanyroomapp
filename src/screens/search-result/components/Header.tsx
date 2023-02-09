import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps';
import SearchBox from './Search';

const Header = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
            <View style={{ height: 10 }} />
            <SearchBox />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 10
    },
    map: {
        width: Dimensions.get('window').width,
        height: 450,//Dimensions.get('window').height,
    },
});

export default Header
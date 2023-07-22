import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';


const Header = () => {
    return (
        <View style={ styles.center }>
            <View style={[ styles.container, styles.center ]}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Welcome back, Reservations</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: Dimensions.get('screen').width - 20,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 5,
        marginTop: 10
    }
});


export default Header;
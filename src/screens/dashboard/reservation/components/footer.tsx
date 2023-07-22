import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const Header = () => {
    return (
        <View style={ styles.center }>
            {/* <View style={ styles.container }>
                <Text style={{ fontWeight: 'bold', fontSize: 14, left: 20, top: 10 }}>Recent Messages</Text>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#f15e75', bottom: 10, right: 20 }}>View All  <FontAwesome name="arrow-circle-right" size={14} color="#f15e75" /></Text>
                    </TouchableOpacity>
                </View>
            </View> */}
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
        marginTop: 10,
        marginBottom: 20
    }
});


export default Header;
import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';


const Header = ( item ) => {
    
    return (
        <View style={styles.titleBox}>
            <Text style={styles.title}>{item.data.title}
 
            { item.data.featured == 1 ? 
                <View style={styles.feature}>
                    <Text style={{ fontSize: 10, color: 'white' }}>Featured</Text>
                </View> 
                : <View></View>
            }

            </Text>
            <Text style={styles.address}>
                <Entypo name="location-pin" size={14} color="grey" /> {item.data.address}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleBox: {
        width: Dimensions.get('screen').width - 20,
        margin: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    feature: {
        width: 50,
        height: 20,
        backgroundColor: 'skyblue',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    address: {
        fontSize: 12,
        marginTop: 4,
        color: 'grey'
    }
});


export default Header
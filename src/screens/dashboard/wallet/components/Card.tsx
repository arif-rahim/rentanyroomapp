import React from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";


const TotalEarning = ({ title = '', badge = false, description = '', buttonText = '', numbers = '', onPress }) => {
    return (
        <View style={styles.card}>
            <Text style={[styles.earning, styles.margin]}>{numbers}</Text>

            <View style={[styles.row, styles.margin]}>
                <Text style={styles.title}>{title}</Text>
                {badge && <View style={styles.badge}>
                    <Text>Fees: 10%</Text>
                </View>}
            </View>

            <Text style={[styles.text, { marginTop: 6 }]}>{ description }</Text>

            <TouchableOpacity style={[styles.button, styles.margin]} onPress={onPress}>
                <Text style={styles.buttonText}>{ buttonText }</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('screen').width - 20,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        elevation: 6,
        marginTop: 15,
        marginBottom: 15
    },
    earning: {
        fontSize: 40,
    },
    title: {
        fontSize: 22
    },
    text: {
        color: 'grey'
    },
    badge: {
        backgroundColor: '#85c341',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2,
        margin: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f15e75',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    margin: {
        marginTop: 20
    }
});


export default TotalEarning;
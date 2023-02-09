import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const Terms = (item) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Terms & Rules</Text>
            <View>
                <View style={ styles.item }>
                    <Text style={styles.text}>
                    {item.data.smoke ==0 ? <FontAwesome name="times" size={16} color="black" />  : 
                    <FontAwesome name="check" size={16} color="black" /> }  Smooking allowed:
                    </Text>
                    <Text style={styles.bold}> {item.data.smoke ==0 ? 'No' : 'Yes'}</Text>
                </View>

                <View style={ styles.item }>
                    <Text style={styles.text}>
                    {item.data.pets ==0 ? <FontAwesome name="times" size={16} color="black" />  : 
                    <FontAwesome name="check" size={16} color="black" /> } Pets allowed:
                    </Text> 
                    <Text style={styles.bold}> {item.data.pets ==0 ? 'No' : 'Yes'}</Text>
                </View>

                <View style={ styles.item }>
                    <Text style={styles.text}>
                    {item.data.party ==0 ? <FontAwesome name="times" size={16} color="black" />  : 
                    <FontAwesome name="check" size={16} color="black" /> }  Party allowed:
                    </Text>
                    <Text style={styles.bold}> {item.data.party ==0 ? 'No' : 'Yes'}</Text>
                </View>

                <View style={ styles.item }>
                    <Text style={styles.text}>
                    {item.data.children ==0 ? <FontAwesome name="times" size={16} color="black" />  : 
                    <FontAwesome name="check" size={16} color="black" /> }  Children allowed:
                    </Text>
                    <Text style={styles.bold}> {item.data.children ==0 ? 'No' : 'Yes'}</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30
    },
    item: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    text: {
        color: 'grey'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold',
        color: 'black'
    }
});


export default Terms
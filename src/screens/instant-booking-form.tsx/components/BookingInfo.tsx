import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";


const BookingInfo = (props) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.textContainer }>
                <Text style={[ styles.title, styles.bold ]}>Enjoy and book with confidence.</Text>
                <Text style={[ styles.text ]}>Leave the ability to add content in this page</Text>
            </View>

            <View style={ styles.notice }>
                <Text style={{ color: '#34B2E4' }}>
                    <FontAwesome name="clock-o" size={14} color="#34B2E4" />    Please act quickly! Rates and availability may subject to change.
                </Text>
            </View>


            <View style={ styles.bookingInfoBox }>
                <Text style={ styles.title }>Testing</Text>
                <Text style={ styles.text }>Appartment</Text>

                <View style={ styles.space } />
                
                <View style={ styles.bookingInfo }>
                    <View style={ styles.row }>
                        <View>
                            <Text style={ styles.text }><FontAwesome name="arrow-circle-o-down" color="black" /> Arrive</Text>
                            <Text style={ styles.date }>{props.data.start}</Text>
                        </View>

                        <View>
                            <Text style={ styles.text }><FontAwesome name="arrow-circle-o-up" color="black" /> Depart</Text>
                            <Text style={ styles.date }>{props.data.end}</Text>
                        </View>
                    </View>

                    <View style={ styles.space } />

                    <View style={ styles.row }>
                        <View>
                            <Text style={ styles.text }><FontAwesome name="user" color="black" /> Guests</Text>
                            <Text style={ styles.date }>{props.data.guestchange} Guests</Text>
                        </View>
                    </View>
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
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        color: 'grey'
    },
    notice: {
        width: Dimensions.get('screen').width - 50,
        height: 80,
        backgroundColor: 'lightblue',
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 30
    },
    bookingInfoBox: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 6,
        elevation: 5
    },
    bookingInfo: {
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 6
    },
    date: {
        fontSize: 16,
        color: 'grey'
    },
    row: { 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    space: {
        height: 20
    }
});


export default BookingInfo
import React,{useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


const Accomodation = (item) => { 
    const accomodation = item.data.accomodation;
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Accomodation</Text>
            {item.data.accomodation ? accomodation.map(getAccomodation) : '' }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignSelf: 'center',
        // borderRadius: 20,
        // width: Dimensions.get('screen').width - 30,
        // elevation: 5,
        // backgroundColor: 'white',
        // paddingTop: 10,
        // paddingBottom: 20,

        alignItems: 'flex-start',
        paddingLeft: 25,
        marginTop: 30
    },
    box: {
        flex: 1,
        alignItems: 'flex-start'
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


export default Accomodation;

function getAccomodation(item: any, index: any): React.ReactNode {
    return (
        <View style={{ flexDirection: 'row', paddingRight: 25 }} key={index}>
                <View style={styles.box}>
                    <FontAwesome name="bed" size={38} color="lightgrey" />
                    <Text style={{ fontWeight: 'bold' }}>{item.acc_bedroom_name}</Text>
                    <Text style={{ color: 'grey' }}>{item.acc_no_of_beds} {item.acc_bedroom_type}</Text>
                    <Text style={{ color: 'grey' }}>{item.acc_guests} Guests</Text>
                </View>
            </View>
    );
}
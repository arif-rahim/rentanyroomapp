import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";


const CustomPeriodPrice = (item) => {

    const persons = item.data.custom_period;
    // [
    //     { start: "2019-04-15", end: "2019-04-15", nightly: "150.00", weekends: "150.00", guests: "150.00" },
    //     { start: "2019-04-15", end: "2019-04-15", nightly: "150.00", weekends: "150.00", guests: "150.00" },
    //     { start: "2019-04-15", end: "2019-04-15", nightly: "150.00", weekends: "150.00", guests: "150.00" }
    // ];

    return (
        <View style={ styles.container }>
            <Text style={[styles.title, styles.bold]}>Custom Period Price</Text>
            {item.data.custom_period ? persons.map(getCustomPeriodPrice) : '' }
        </View>
        );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bold: {
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold'
    },
    text: {
        color: 'grey'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    width50: {
        width: Dimensions.get('screen').width /2
    }
});


export default CustomPeriodPrice

function getCustomPeriodPrice(item: any, index: any): React.ReactNode {
    return (
        <View key={ index } style={{ margin: 15 }}>
            <View style={ styles.row }>
                <View style={ styles.width50 }>
                    <Text style={ styles.bold }>Start Date</Text>
                </View>
                <View style={ styles.width50 }>
                    <Text style={ styles.text }>{ item.from_date }</Text>
                </View>
            </View>

            <View style={ styles.row }>
                <View style={ styles.width50 }>
                    <Text style={ styles.bold }>End Date</Text>
                </View>
                <View style={ styles.width50 }>
                    <Text style={ styles.text }>{ item.to_date }</Text>
                </View>
            </View>

            <View style={ styles.row }>
                <View style={ styles.width50 }>
                    <Text style={ styles.bold }>Nightly</Text>
                </View>
                <View style={ styles.width50 }>
                    <Text style={ styles.price }>{ item.night_price }</Text>
                </View>
            </View>

            <View style={ styles.row }>
                <View style={ styles.width50 }>
                    <Text style={ styles.bold }>Weekends</Text>
                </View>
                <View style={ styles.width50 }>
                    <Text style={ styles.price }>{ item.weekend_price }</Text>
                </View>
            </View>

            <View style={ styles.row }>
                <View style={ styles.width50 }>
                    <Text style={ styles.bold }>Additional Guests</Text>
                </View>
                <View style={ styles.width50 }>
                    <Text style={ styles.price }>{ item.guest_price }</Text>
                </View>
            </View>
        </View>
    );
}

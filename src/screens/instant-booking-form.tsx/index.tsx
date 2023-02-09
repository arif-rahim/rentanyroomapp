import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Dimensions, View } from "react-native";
import BookingInfo from "./components/BookingInfo";
import RulesAndPolicies from "./components/RulesAndPolicies";
import SelectPayment from "./components/SelectPayment";
import StartBooking from "./components/StartBooking";
 
 
const InstantBookingForm = (props) => {
    const bookDetail= props.route.params;
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView style={{ width: Dimensions.get('screen').width }}>
                <BookingInfo data={bookDetail}/>
                <StartBooking data={bookDetail}/>
                <RulesAndPolicies data={bookDetail}/>
                <SelectPayment data={bookDetail}/>

                <View style={ styles.space } />
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#eee'
    },
    space: {
        height: 20
    }
});


export default InstantBookingForm
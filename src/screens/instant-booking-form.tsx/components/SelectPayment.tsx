import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";


const SelectPayment = (props) => {
    const [checked, setChecked] = useState('');
    console.log(checked)
    return (
        <View style={ styles.container }>
            <View style={ styles.form }>
                <View style={ styles.formTitle }>
                    <View style={ styles.circleIcon }>
                        <Text style={[ styles.circleIconText ]}>3</Text>
                    </View>
                    <Text style={[ styles.title, styles.bold, { marginLeft: 10 }]}>Payment</Text>
                </View>

                <View style={ styles.space } />

                <Text style={ styles.title }>Select the payment method</Text>

                <View style={ styles.space } />

                <View style={ styles.paymentCard }>
                    <View style={[ styles.paymentMethod, styles.borderRadiusTop ]}>
                        <RadioButton 
                            value="paypal"
                            status={checked === 'paypal' ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked('paypal') }} 
                        />
                        <Text>Paypal <FontAwesome name="cc-paypal" size={24} /></Text>
                    </View>
                    <View style={[ styles.paymentMethod, styles.borderRadiusBottom ]}>
                        <RadioButton 
                            value="stripe"
                            status={checked === 'stripe' ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked('stripe') }} 
                        />
                        <Text>Stripe <FontAwesome name="cc-stripe" size={24} /></Text>
                    </View>
                </View>

                {/* <TouchableOpacity style={styles.btnContainer} onPress={() => {}} >
                    <Text style={{ color: 'white' }}>Process Payment</Text>
                </TouchableOpacity> */}
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
    formTitle: { 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        borderRadius: 6,
        elevation: 5,
        padding: 5
    },
    circleIcon: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: Colors.light.primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleIconText: {
        fontSize: 16,
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    },
    text: {
        color: 'grey'
    },
    title: {
        fontSize: 16
    },
    form: {
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 6,
        elevation: 5
    },
    paymentCard: {

    },
    paymentMethod: { 
        height: 70,
        borderWidth: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        borderColor: 'lightgrey'
    },
    borderRadiusTop: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    borderRadiusBottom: {
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6
    },
    btnContainer: {
        width: '100%',
        backgroundColor: Colors.light.secodaryColor,
        marginTop: 12,
        borderRadius: 5,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    space: {
        height: 20
    }
});



export default SelectPayment
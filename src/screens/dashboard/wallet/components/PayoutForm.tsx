import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Alert, Modal } from "react-native";


const PayoutForm = ({ modalVisible = false, setModalVisible }) => {
    const [text, onChangeText] = useState('');
    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.card}>
                    <View style={[ styles.margin, { alignItems: 'flex-end' }]}>
                        <View style={ styles.close }>
                            <FontAwesome name="times" size={24} color="white" onPress={() => setModalVisible(!modalVisible)} />
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.earning, styles.margin]}>Available Balance $3900.00</Text>

                        <Text style={[styles.text, , styles.margin]}>Note: the minimum amount for a payout is $ 500</Text>
                        
                        <Text style={[styles.title, , styles.margin]}>Payout Amount</Text>

                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                    <TouchableOpacity style={[styles.button, styles.margin]} onPress={() => { }}>
                        <Text style={styles.buttonText}>Request a Payout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('screen').width - 20,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        paddingTop: 0,
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
        backgroundColor: '#85c341',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    margin: {
        marginTop: 20
    },
    textInput: {
        // width: Dimensions.get('screen').width / 1.5,
        height: 40,
        borderColor: "lightgrey",
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 2,
    },
    close: {
        width: 30,
        height: 30,
        backgroundColor: '#f15e75',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6
    }
});


export default PayoutForm;
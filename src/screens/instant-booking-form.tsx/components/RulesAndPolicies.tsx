import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";


const RulesAndPolicies = (props) => {
    const [checked, setChecked] = useState(false)
    const onChecked = () => {
        setChecked(!checked)
    }
 
    return (
        <View style={ styles.container }>
            <View style={ styles.form }>
                <View style={ styles.formTitle }>
                    <View style={ styles.circleIcon }>
                        <Text style={[ styles.circleIconText ]}>2</Text>
                    </View>
                    <Text style={[ styles.title, styles.bold, { marginLeft: 10 }]}>Rules & Policies</Text>
                </View>
                
                <View style={ styles.space } />

                <Text style={ styles.title }>Terms & Rules</Text>

                <View>
                    <View style={ styles.rules }>
                    <Text style={styles.text}>
                    {props.data.smoke ==0 ? <FontAwesome name="times" size={16} color="black" />  : 
                    <FontAwesome name="check" size={16} color="black" /> }  Smooking allowed:
                    </Text>
                    <Text style={styles.bold}> {props.data.smoke ==0 ? 'No' : 'Yes'}</Text>
                    </View>

                    <View style={ styles.rules }>
                    <Text style={styles.text}>
                    {props.data.pets ==0 ? <FontAwesome name="times" size={16} color="black" />  : 
                    <FontAwesome name="check" size={16} color="black" /> } Pets allowed:
                    </Text> 
                    <Text style={styles.bold}> {props.data.pets ==0 ? 'No' : 'Yes'}</Text>
                    </View>

                    <View style={ styles.rules }>
                    <Text style={styles.text}>
                    {props.data.party ==0 ? <FontAwesome name="times" size={16} color="black" />  : 
                    <FontAwesome name="check" size={16} color="black" /> }  Party allowed:
                    </Text>
                    <Text style={styles.bold}> {props.data.party ==0 ? 'No' : 'Yes'}</Text>
                    </View>

                    <View style={ styles.rules }>
                    <Text style={styles.text}>
                    {props.data.children ==0 ? <FontAwesome name="times" size={16} color="black" />  : 
                    <FontAwesome name="check" size={16} color="black" /> }  Children allowed:
                    </Text>
                    <Text style={styles.bold}> {props.data.children ==0 ? 'No' : 'Yes'}</Text>
                    </View>
                </View>

                <View style={ styles.agreeBox }>
                    <Pressable style={ styles.checkBox } onPress={() => { onChecked(); }}>
                        {checked && <FontAwesome name='check-square-o' size={24} color="skyblue" />}
                    </Pressable>
                    <Text style={{ textAlign: 'justify', width: '80%', marginLeft: 10, lineHeight: 25 }}>I have read and agree with all rental policies and terms.</Text>
                </View>

                {/* <TouchableOpacity style={styles.btnContainer} onPress={() => {}} >
                    <Text style={{ color: 'white' }}>Continue</Text>
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
    space: {
        height: 20
    },
    rules: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 10
    },
    agreeBox: {
        height: 80,
        backgroundColor: '#eee',
        marginTop: 30,
        borderRadius: 6,
        padding: 15,
        flexDirection: 'row'
    },
    checkBox: {
        width: 26,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        elevation: 5
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
});


export default RulesAndPolicies
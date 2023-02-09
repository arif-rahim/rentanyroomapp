import React from "react";
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Colors from "../../../constants/Colors";


const StartBooking = (props) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <View style={ styles.container }>
            <View style={ styles.form }>
                <View style={ styles.formTitle }>
                    <View style={ styles.circleIcon }>
                        <Text style={[ styles.circleIconText ]}>1</Text>
                    </View>
                    <Text style={[ styles.title, styles.bold, { marginLeft: 10 }]}>Start booking</Text>
                </View>

                <View style={{ paddingTop: 30, paddingBottom: 10 }}>
                    <Text>First Name</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Enter your first name"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="firstname"
                        defaultValue=""
                    />
                    
                    <View style={ styles.space } />
                    <Text>Last Name</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Enter your last name"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="lastname"
                        defaultValue=""
                    />

                    <View style={ styles.space } />
                    <Text>Phone Number</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Enter your phone number"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType='phone-pad'
                            />
                        )}
                        name="phonenumber"
                        defaultValue=""
                    />

                </View>
                {/* <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit(onSubmit)} >
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
    textInput: {
        width: '100%',
        height: 40,
        borderColor: "lightgrey",
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 2,
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


export default StartBooking
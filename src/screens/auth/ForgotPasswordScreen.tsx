import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useForm, Controller } from 'react-hook-form';

import Index from './index';
import styles from '../../assets/styles/AuthStyle';
import Layout from '../../constants/Layout';

const { width } = Layout.window;

const ForgotPasswordScreen = ({navigation}) => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Index>
            <View style={ styles.alignCenter }>
                <View style={styles.modal}>
                    <MaterialIcons
                        name='close'
                        size={36}
                        color="white"
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => navigation.goBack() }
                    />
                    <View style={{ ...styles.alignCenter, }}>


                        <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'justify', color: 'white' }}>Forgot Password</Text>

                        <View style={{ height: 50 }} />
                        <Text style={{ width: width / 1.5, color: 'white' }}>Please enter your username or email address. You will receive a link to create a new password via email.</Text>
                        <View style={styles.spacer} />

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor="lightgrey"
                                    style={{ ...styles.textInput, color: 'white' }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="forgotPassEmail"
                            defaultValue=""
                        />
                        <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit(onSubmit)} >
                            <Text style={{ color: 'white' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Index>

    );
}



export default ForgotPasswordScreen
import React, { useContext, useState,useEffect,useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import * as SecureStore from 'expo-secure-store';
import Index from './index';
import styles from '../../assets/styles/AuthStyle';
import { AuthContext } from '../../hooks/useAuthContext';
import { Picker } from '@react-native-picker/picker';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';

const SignupScreen = ({ navigation }) => {
    const loginWithFacebook = () => {
        console.log('Facebook');
    };
    const loginWithGoogle = () => {
        console.log('Google');
    };

    const { control, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(false);
    const onSubmit = (data: any) => {
        if(data.password == data.repeat_password){
            setError(false);
            signUp(data);
        }else{
            setError(true);
        }
    };

    const { signUp } = useContext(AuthContext);

    return (
        <Index>
        
            <View style={styles.inner}>

                <Text style={{ fontSize: 30, marginBottom: 15, width: "100%" }}>Register</Text>
                
                <FontAwesome.Button style={{ ...styles.iconBtn, ...styles.facebook }} name="facebook" color="#3b5998" backgroundColor="white" onPress={loginWithFacebook}>
                    <Text style={{ width: "80%", textAlign: 'center', color: '#3b5998' }}> Login with Facebook</Text>
                </FontAwesome.Button>

                <View style={styles.spacer} />

                <FontAwesome.Button style={{ ...styles.iconBtn, ...styles.google }} name="google" color="red" backgroundColor="white" onPress={loginWithGoogle}>
                    <Text style={{ width: "80%", textAlign: 'center', color: 'red' }}> Login with Google</Text>
                </FontAwesome.Button>

                <View style={styles.spacer} />

                <Text style={{ fontSize: 20, }}>Register with Your email</Text>


                <View style={styles.spacer} />

                <View>
                <Controller
                        control={control}
                        rules={{}}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <TextInput
                                placeholder="Username"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="username"
                        defaultValue=""
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        }}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <TextInput
                                placeholder="Email"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType='email-address'
                            />
                        )}
                        name="useremail"
                        defaultValue=""
                    />

                    {errors.email && <Text style={{ color: 'red' }}>Invalid email</Text>}
 
                    <Controller
                        control={control}
                        rules={{}}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <TextInput
                                placeholder="Password"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={true}
                            />
                        )}
                        name="password"
                        defaultValue=""
                    />

                    <Controller
                        control={control}
                        rules={{}}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <TextInput
                                placeholder="Repeat Password"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="repeat_password"
                        defaultValue=""
                    />

                    {error && <Text style={{ color: 'red' }}>not match</Text>}

                    <Controller
                        control={control}
                        rules={{}}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <Picker
                                selectedValue=''
                                onValueChange={onChange}
                                mode='dropdown'
                                itemStyle={{ color: 'red' }}
                                        >
                                <Picker.Item label="" value="" enabled={false} />
                                <Picker.Item label="I want to book" value="homey_renter" />
                                <Picker.Item label="I want to host" value="homey_host" />
                                </Picker>

                        )}
                        name="role"
                        defaultValue=""
                    />

                    <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit(onSubmit)} >
                        <Text style={{ color: 'white' }}>Register</Text>
                    </TouchableOpacity>

                    <View style={styles.spacer} />

                    <Text>Do you already have an account?
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ color: '#F15E75' }}> Log In</Text>
                        </TouchableOpacity>
                    </Text>

                </View>
            </View>
        </Index>
    );
}



export default SignupScreen;
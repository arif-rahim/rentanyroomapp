import React, { useContext,useState,useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import * as WebBrowser from 'expo-web-browser';
import Index from './index';
import styles from '../../assets/styles/AuthStyle'
import { AuthContext } from '../../hooks/useAuthContext';
import * as Google from 'expo-auth-session/providers/google';
const LoginScreen = ({ navigation }) => {
    const [accessToken, setAccessToken] = React.useState(null);
    const [user, setUser] = React.useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '885142629737-7rka3t88hq136upivp1nlhki9rm22qef.apps.googleusercontent.com',
        androidClientId: '885142629737-m5mfs1i0hqicn436b8i2q7h8rimpvnmn.apps.googleusercontent.com',
        clientId: '885142629737-4ij79dq3qrv8dhlea0o5djbenrcue0cd.apps.googleusercontent.com',
      });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          setAccessToken(response.authentication.accessToken);
            accessToken && fetchUserInfo();
        }
      }, [response, accessToken]);

      async function fetchUserInfo() {
        let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        const useInfo = await response.json();
        setUser(useInfo);
      }
    console.log(user);
    const loginWithFacebook = () => {
        
    };
    const loginWithGoogle  = async () => {
    };
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        // console.log(data);
        signIn(data);
    };
    
    const { signIn } = useContext(AuthContext);

    return (

        <Index>
            <View style={styles.inner}>
                <Text style={{ fontSize: 30, marginBottom: 15, width: "100%", height: "20%" }}>Login</Text>

                <FontAwesome.Button style={{ ...styles.iconBtn, ...styles.facebook }} name="facebook" color="#3b5998" backgroundColor="white" onPress={loginWithFacebook}>
                    <Text style={{ width: "80%", textAlign: 'center', color: '#3b5998' }}> Login with Facebook</Text>
                </FontAwesome.Button>

                <View style={styles.spacer} />

                <FontAwesome.Button style={{ ...styles.iconBtn, ...styles.google }} name="google" color="red" backgroundColor="white" onPress={() => {promptAsync(); }}>
                    <Text style={{ width: "80%", textAlign: 'center', color: 'red' }}> Login with Google</Text>
                </FontAwesome.Button>

                <View style={styles.spacer} />

                <Text style={{ fontSize: 20, }}>Login with Your email</Text>


                <View style={styles.spacer} />

                <View>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Email"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType='email-address'
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    {errors.email && <Text style={{ color: 'red' }}>Invalid email</Text>}

                    <Controller
                        control={control}
                        rules={{
                            minLength: 8,
                            required: true,
                        }}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <TextInput
                                placeholder="Password"
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={true}
                                keyboardType='visible-password'
                            />
                        )}
                        name="password"
                        defaultValue=""
                    />

                    {errors.password && <Text style={{ color: 'red' }}>Exceed maxLength</Text>}


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Forgot')}
                    >
                        <Text style={{ marginTop: 10, textAlign: 'right' }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit(onSubmit)} >
                        <Text style={{ color: 'white' }}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.spacer} />

                    <Text>You don't have an account?
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={{ color: '#F15E75' }}> Register</Text>
                        </TouchableOpacity>
                    </Text>

                </View>
            </View>
        </Index>
    );
}





export default LoginScreen;
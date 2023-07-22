import React, { useContext, useState,useEffect,useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,Platform,StyleSheet,ActivityIndicator
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import * as SecureStore from 'expo-secure-store';
import Index from './index';
import styles from '../../assets/styles/AuthStyle';
import { AuthContext } from '../../hooks/useAuthContext';
import { Picker } from '@react-native-picker/picker';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      //console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }
const SignupScreen = ({ navigation }) => {
    const [expoPushToken, setExpoPushToken] = useState('');
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  }, []);
    const loginWithFacebook = () => {
        console.log('Facebook');
    };
    const loginWithGoogle = () => {
        console.log('Google');
    };

    const { control, handleSubmit,setValue, formState: { errors } } = useForm();
    const [error, setError] = useState(false);
    const [res, setRes] = useState(null);
    const [spiner, setSpiner] = useState(false);
    const onSubmit = async (data:any) => {
        setSpiner(true);
        if(data.password == data.repeat_password){
            setValue('expoPushToken', expoPushToken);
            setError(false);
            const result = await signUp(data);
      setRes(result);
      if(result){setSpiner(false);}
      console.log(result);
        }else{
            setError(false);
        }
    };

    const { signUp } = useContext(AuthContext);
    const [selectedRole, setSelectedRole] = useState("java");
    return (
        <Index>
        
            <View style={styles.inner}>

                <Text style={{ fontSize: 30, marginBottom: 15 }}>Register</Text>
                
                {/* <FontAwesome.Button style={{ ...styles.iconBtn, ...styles.facebook }} name="facebook" color="#3b5998" backgroundColor="white" onPress={loginWithFacebook}>
                    <Text style={{ width: "80%", textAlign: 'center', color: '#3b5998' }}> Login with Facebook</Text>
                </FontAwesome.Button>

                <View style={styles.spacer} />

                <FontAwesome.Button style={{ ...styles.iconBtn, ...styles.google }} name="google" color="red" backgroundColor="white" onPress={loginWithGoogle}>
                    <Text style={{ width: "80%", textAlign: 'center', color: 'red' }}> Login with Google</Text>
                </FontAwesome.Button> */}

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
                                style={styless.inputField}
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
                            // <TextInput
                            //     placeholder="Password"
                            //     style={styless.inputField}
                            //     onBlur={onBlur}
                            //     onChangeText={onChange}
                            //     value={value}
                            //     secureTextEntry={true}
                            // />
                            <TextInput
                            style={styless.inputField}
                            placeholder="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            textContentType="newPassword"
                            secureTextEntry
                            value={value}
                            enablesReturnKeyAutomatically
                            onBlur={onBlur}
                            onChangeText={onChange}
                          />
                        )}
                        name="password"
                        defaultValue=""
                    />

                    <Controller
                        control={control}
                        rules={{}}
                        render={({ field: { onBlur, onChange, value } }) => (
                            // <TextInput
                            //     placeholder="Repeat Password"
                            //     style={styles.textInput}
                            //     onBlur={onBlur}
                            //     onChangeText={onChange}
                            //     value={value}
                            // />
                            <TextInput
                            style={styless.inputField}
                            placeholder="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            textContentType="newPassword"
                            secureTextEntry
                            value={value}
                            enablesReturnKeyAutomatically
                            onBlur={onBlur}
                            onChangeText={onChange}
                          />
                        )}
                        name="repeat_password"
                        defaultValue=""
                    />

                    {error && <Text style={{ color: 'red' }}>not match</Text>}
                    <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 4,marginTop: 10,
          height: 50,marginBottom: 5, }}>          
                    <Controller
                        control={control}
                        rules={{}}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <Picker
                            selectedValue={selectedRole}
                            style={{ height: 50, width: 250 }}
                                // onValueChange={onChange}
                                onValueChange={(itemValue, itemIndex) => setSelectedRole(itemValue)}
                                mode='dropdown'
                                itemStyle={{ color: 'red' }}
                                        >
                                <Picker.Item label="Select" value="" enabled={false} />
                                <Picker.Item label="I want to book" value="homey_renter" />
                                <Picker.Item label="I want to host" value="homey_host" />
                                </Picker>

                        )}
                        name="role"
                        defaultValue=""
                    />
                    </View>
                    <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit(onSubmit)} >
                        {/* <Text style={{ color: 'white' }}>Register</Text> */}
                        {spiner?<ActivityIndicator color={"#fff"} />:<Text style={{ color: 'white' }}>Register</Text>}

                        {/* {spiner && <ActivityIndicator color={"#fff"} />} */}
                    </TouchableOpacity>
                    {res && !res.success && (
      <Text style={{ color: 'red' }}>{res.token}</Text>
    )}
                    <View style={styles.spacer} />
                    {/* onPress={() => navigation.goBack()} */}
                    <Text>Do you already have an account? 
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Text style={{ color: '#F15E75' }}> Log In</Text>
                        </TouchableOpacity>
                    </Text>

                </View>
            </View>
        </Index>
    );
}



export default SignupScreen;

const styless = StyleSheet.create({
    inputField: {
      marginTop: 10,
          height: 40,
          borderColor: "lightgrey",
          borderWidth: 2,
          borderRadius: 5,
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
  
    }
  });
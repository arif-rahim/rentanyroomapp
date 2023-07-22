import React, { useContext,useState,useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,Platform,StyleSheet,ActivityIndicator 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import * as WebBrowser from 'expo-web-browser';
import Index from './index';
import styles from '../../assets/styles/AuthStyle'
import { AuthContext } from '../../hooks/useAuthContext';
import ErrorComponent from './ErrorComponent';
import * as Google from 'expo-auth-session/providers/google';
import ForgotPasswordScreen   from "./ForgotPasswordScreen";
import * as AuthSession from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as SecureStore from 'expo-secure-store';
import HTML from 'react-native-render-html';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

WebBrowser.maybeCompleteAuthSession();


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


const LoginScreen = ({ navigation }) => {
    const [accessToken, setAccessToken] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const { signUp } = useContext(AuthContext);

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
        signUp(useInfo);
      }
    //console.log(user);
    // const loginWithFacebook = () => {
        
    // };
    const [fuser, setUfser] = useState(null);
  const [frequest, fresponse, fpromptAsync] = Facebook.useAuthRequest({
    clientId: "200537116125291",
  });

  if (frequest) {
    console.log(
      "You need to add this url to your authorized redirect urls on your Facebook app: " +
      frequest.redirectUri
    );
  }
  const [expoPushToken, setExpoPushToken] = useState('');
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    if (fresponse && fresponse.type === "success" && fresponse.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${fresponse.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUfser(userInfo);
        signUp(userInfo);
      })();
    }
  }, [fresponse]);
    const loginWithFacebook = async () => {
        const result = await fpromptAsync();
        if (result.type !== "success") {
          alert("Uh oh, something went wrong");
          return;
        } else {
            console.log(result);
        }
      };
    const loginWithGoogle  = async () => {
    };
    const { control, handleSubmit,setValue , formState: { errors } } = useForm();
    // const onSubmit = (data: any) => {
    //   setValue('expoPushToken', expoPushToken);
         
    //     signIn(data);
    //     console.log(signIn(data));
    // };
    const [res, setRes] = useState();
    const [spiner, setSpiner] = useState(false);
    const onSubmit = async (data) => {
      setSpiner(true);
      setValue('expoPushToken', expoPushToken);
      const result = await signIn(data);
      setRes(result);console.log(result);
      if(result){setSpiner(false);}
      
    };
    
    const { signIn } = useContext(AuthContext);

   
    return (

        <Index>
            <View style={styles.inner}>
                <Text style={{ fontSize: 30, marginBottom: 15,  justifyContent: "center", height: "15%" }}>Login</Text>

                {/* <FontAwesome.Button style={{ ...styles.iconBtn, ...styles.facebook }} name="facebook" color="#3b5998" backgroundColor="white" onPress={loginWithFacebook}>
                    <Text style={{ width: "80%", textAlign: 'center', color: '#3b5998' }}> Login with Facebook</Text>
                </FontAwesome.Button>

                <View style={styles.spacer} />

                <FontAwesome.Button style={{ ...styles.iconBtn, ...styles.google }} name="google" color="red" backgroundColor="white" onPress={() => {promptAsync(); }}>
                    <Text style={{ width: "80%", textAlign: 'center', color: 'red' }}> Login with Google</Text>
                </FontAwesome.Button> */}

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
                    {/* {errors.email && setSpiner(false)} */}
                    <Controller
                        control={control}
                        rules={{
                            minLength: 3,
                            required: true,
                        }}
                        render={({ field: { onBlur, onChange, value } }) => (
                            // <TextInput
                            //     placeholder="Password"
                            //     style={styles.textInput}
                            //     onBlur={onBlur}
                            //     onChangeText={onChange}
                            //     value={value}
                            //     secureTextEntry={true}
                            //     keyboardType='visible-password'
                            // />
                            <TextInput
          style={styless.inputField}
          placeholder="Enter password"
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

                    {errors.password && <Text style={{ color: 'red' }}>Exceed maxLength</Text>}
                    {/* {errors.password && setSpiner(false)} */}

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Forgot')}
                    >
                        <Text style={{ marginTop: 10, textAlign: 'right' }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit(onSubmit)}>
                    {spiner?<ActivityIndicator color={"#fff"} />:<Text style={{ color: 'white' }}>Login</Text>}
                        
                        {/* {spiner && <ActivityIndicator color={"#fff"} />} */}
                    </TouchableOpacity>
                    <View>
                      {res?
                      <ErrorComponent response={res}/>:''
                    }
                    </View>
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

const styless = StyleSheet.create({
  inputField: {
    marginTop: 20,
        height: 40,
        borderColor: "lightgrey",
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 2,

  }
});
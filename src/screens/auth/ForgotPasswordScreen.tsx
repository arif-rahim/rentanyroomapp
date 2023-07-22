import React,{useState} from "react";
import { TouchableOpacity, View, Text, TextInput,ActivityIndicator,Dimensions,StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useForm, Controller } from 'react-hook-form';

import Index from './index';
import styles from '../../assets/styles/AuthStyle';
import Layout from '../../constants/Layout';
import axios from "axios";
import Api from "../../ApiUrl";
const { width } = Layout.window;

const ForgotPasswordScreen = ({navigation}) => {
    const [spiner, setSpiner] = useState(false);
    const [message, setMessage] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const formData = new FormData();
    const onSubmit = (data: any) => {
        setSpiner(true);
        
        const keyword = {
            user_login: data.forgotPassEmail
        };
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/retrieve_password", keyword )
            .then(res => {
                setSpiner(false);
                setMessage(res.data.msg);
               console.log(res.data);

            })
            .catch(err => {console.log(err);setMessage(err.errors);setSpiner(false);});
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
                        <Text style={{ width: width / 1.5, color: 'red' }}>{message}</Text>
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
                            {spiner? <ActivityIndicator size="large" color="white" />:<Text style={{ color: 'white' }}>Submit</Text>}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Index>

    );
}


const styless = StyleSheet.create({
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});
export default ForgotPasswordScreen
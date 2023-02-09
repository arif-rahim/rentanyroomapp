import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions,SafeAreaView,ActivityIndicator,StyleSheet } from 'react-native';
import styles from '../../../../assets/styles/ProfileStyle';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import Api from "../../../../ApiUrl";

const height = Dimensions.get('window').height;


const EmergencyContactForm = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        const keyword = {
            user_id: global.userid,
            em_contact_name: data.contactName,
            em_relationship: data.relationship,
            em_email: data.email,
            em_phone: data.phone
        };
          
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/emergency_contact", keyword )
            .then(res => {
                //console.log(dummyData);
               console.log(res);
            })
            .catch(err => {console.log(err)});
    }
    const keyword = {
        user_id: global.userid
    };
    const [check, setCheck] = useState([]); 
    const [contact_name, setContact_name] = useState(); 
    const [relationship, setRelationship] = useState(); 
    const [email, setEmail] = useState(); 
    const [phone, setPhone] = useState(); 
axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/user_info", keyword )
        .then(res => {
            setCheck(res.data.meta);
            setContact_name(res.data.meta.homey_em_contact_name);
            setRelationship(res.data.meta.homey_em_relationship);
            setEmail(res.data.meta.homey_em_email);
            setPhone(res.data.meta.homey_em_phone);
            
        })
        .catch(err => {console.log(err)});
        if(check.length!= 0){
    return (
        <View style={{ ...styles.alignCenter }}>
            <View style={{ ...styles.card, height: height / 1.7 }}>
                {/* <View style={{ paddingTop: 20, paddingBottom: 20, borderBottomWidth: .2, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ ...styles.h2, marginLeft: 10 }}>Emergency Contact</Text>
                    </View> */}
                <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ ...styles.alignCenter }}>
                        <View>
                            <Text>Contact Name</Text>
                            <View style={styles.spacer} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onBlur, onChange, value } }) => (
                                    <TextInput
                                        placeholder="Enter Name"
                                        style={{ ...styles.textInput, ...styles.Width1_2 }}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value ? value : contact_name}
                                    />
                                )}
                                name="contactName"
                                defaultValue=""
                            />

                            {errors.contactName && <Text style={{ color: 'red' }}>Required</Text>}

                            <View style={styles.spacer} />

                            <Text>Relationship</Text>
                            <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter Relationship"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value ? value : relationship}
                                        />
                                    )}
                                    name="relationship"
                                    defaultValue=""
                                />
                            <View style={styles.spacer} />

                            <Text>Country Code</Text>
                            <View style={styles.spacer} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onBlur, onChange, value } }) => (
                                    <TextInput
                                        placeholder="Enter Email"
                                        style={{ ...styles.textInput, ...styles.Width1_2 }}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value ? value : email}
                                    />
                                )}
                                name="email"
                                defaultValue=""
                            />

                            {errors.countrycode && <Text style={{ color: 'red' }}>Required</Text>}

                            <View style={styles.spacer} />

                            <Text>Phone</Text>
                            <View style={styles.spacer} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onBlur, onChange, value } }) => (
                                    <TextInput
                                        placeholder="Enter the phone number"
                                        style={{ ...styles.textInput, ...styles.Width1_2 }}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value ? value : phone}
                                    />
                                )}
                                name="phone"
                                defaultValue=""
                            />

                            {errors.phone && <Text style={{ color: 'red' }}>Required</Text>}

                            <View>
                                <TouchableOpacity
                                    style={{ ...styles.btnContainer, ...styles.Width1_2, backgroundColor: '#85c341', borderColor: '#78b238' }}
                                    onPress={handleSubmit(onSubmit)}
                                >
                                    <Text style={{ color: 'white' }}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );}
    else{
    return (
        <SafeAreaView style={styles.container}>
            <View style={style.loader}>
                <ActivityIndicator size="large" color="#0c9" />
                <Text style={{fontSize:16,color:'red'}}>Loading ...</Text>
            </View>
        </SafeAreaView>
    );}
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});


export default EmergencyContactForm;
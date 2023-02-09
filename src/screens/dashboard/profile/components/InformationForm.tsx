import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView,ActivityIndicator,SafeAreaView,StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import styles from '../../../../assets/styles/ProfileStyle';
import * as SecureStore from 'expo-secure-store';
import Api from "../../../../ApiUrl";

const height = Dimensions.get('window').height;

const InformationForm = () => {

    const [selectedValue, setSelectedValue] = useState("Language");  
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        const keyword = {
            user_id: global.userid,
            first_name: data.firstname,
            last_name: data.lastname,
            language: data.selectedLanguage,
            other_language: data.onterLanguage,
            bio: data.bio
        };
          
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/update_user", keyword )
            .then(res => {
                //console.log(dummyData);
               console.log(res);
            })
            .catch(err => {console.log(err)});
    };
    const keyword = {
        user_id: global.userid
    };
        const [check, setCheck] = useState([]); 
        const [userfname, setUserFname] = useState(); 
        const [userlname, setUserLname] = useState(); 
        const [userlang, setUserLang] = useState(); 
        const [userothlang, setUserOthlang] = useState(); 
        const [userbio, setUserBio] = useState();  
    axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/user_info", keyword )
            .then(res => {
                setCheck(res.data.meta);
                setUserFname(res.data.meta.first_name);
                setUserLname(res.data.meta.last_name);
                setUserLang(res.data.meta.homey_native_language);
                setUserOthlang(res.data.meta.homey_other_language);
                setUserBio(res.data.meta.description);
                
            })
            .catch(err => {console.log(err)});

    if(check.length !=0){
    return (
        <ScrollView contentContainerStyle={{ padding: 10 }}>
            <View style={{ ...styles.alignCenter }}>
                <View style={{ ...styles.card, height: height / 1.4 }}>
                    {/* <View style={{ borderBottomWidth: .2, borderBottomColor: 'lightgrey', paddingTop: 20, paddingBottom: 20 }}>
                        <Text style={{ ...styles.h2, ...styles.alignTextCenter, textAlign: 'left', marginLeft: 10, }}>Information</Text>
                    </View> */}
                    <View style={[styles.alignCenter, { flexDirection: 'column' }]}>
                        <View>
                            <Text>First Name</Text>
                            <View style={styles.spacer} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onBlur, onChange, value } }) => (
                                    <TextInput
                                        placeholder="Enter first name"
                                        style={{ ...styles.textInput, ...styles.Width1_2 }}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={userfname}
                                    />
                                )}
                                name="firstname"
                                defaultValue=""
                            />
                            {errors.firstname && <Text style={{ color: 'red' }}>Required</Text>}

                            <View style={styles.spacer} />

                            <Text>Last Name</Text>
                            <View style={styles.spacer} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onBlur, onChange, value } }) => (
                                    <TextInput
                                        placeholder="Enter last name"
                                        style={{ ...styles.textInput, ...styles.Width1_2 }}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={userlname}
                                    />
                                )}
                                name="lastname"
                                defaultValue=""
                            />

                            {errors.lastname && <Text style={{ color: 'red' }}>Required</Text>}

                            <View style={styles.spacer} />

                            <Text>Language</Text>
                            <View style={styles.spacer} />
                            <View style={{ ...styles.textInput, ...styles.Width1_2, padding: 8 }}>
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <Picker
                                            selectedValue={userlang}
                                            // onValueChange={(itemValue, itemIndex) =>
                                            //     setSelectedValue(itemValue)
                                            // }
                                            onValueChange={onChange}
                                            mode='dropdown'
                                            itemStyle={{ color: 'red' }}
                                        >
                                            <Picker.Item label="" value="" enabled={false} />
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                        </Picker>
                                    )}
                                    name="selectedLanguage"
                                    defaultValue=""
                                />
                            </View>

                            <View style={styles.spacer} />

                            <Text>Other Language</Text>
                            <View style={styles.spacer} />
                            <Controller
                                control={control}
                                rules={{}}
                                render={({ field: { onBlur, onChange, value } }) => (
                                    <TextInput
                                        placeholder="Other Language"
                                        style={{ ...styles.textInput, ...styles.Width1_2 }}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={userothlang}
                                    />
                                )}
                                name="onterLanguage"
                                defaultValue=""
                            />

                            <View style={styles.spacer} />

                            <Text>Bio</Text>
                            <View style={styles.spacer} />
                            <Controller
                                control={control}
                                rules={{}}
                                render={({ field: { onBlur, onChange, value } }) => (
                                    <TextInput
                                        placeholder="Bio"
                                        style={{ ...styles.textInput, height: 80, ...styles.Width1_2 }}
                                        multiline
                                        numberOfLines={4}
                                        maxLength={50}
                                        editable
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={userbio}
                                    />
                                )}
                                name="bio"
                                defaultValue=""
                            />
                        </View>
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
        </ScrollView>
    );}
    else{
    return (
        <SafeAreaView style={style.container}>
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



export default InformationForm
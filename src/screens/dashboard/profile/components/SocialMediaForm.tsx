import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Dimensions, ScrollView,ActivityIndicator,SafeAreaView,StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import Api from "../../../../ApiUrl";
import styles from '../../../../assets/styles/ProfileStyle';

const SocialMediaForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data : any) => {
        const keyword = {
            user_id: global.userid,
            facebook: data.facebook,
            twitter: data.twitter,
            googleplus: data.googleplus,
            instagram: data.instagram,
            pinterest: data.pinterest,
            linkedin: data.linkedin
        };
          
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/social", keyword )
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
        const [facebook, setFacebook] = useState(); 
        const [twitter, setTwitter] = useState(); 
        const [googleplus, setGoogleplus] = useState(); 
        const [instagram, setInstagram] = useState(); 
        const [pinterest, setPinterest] = useState(); 
        const [linkedin, setLinkedin] = useState(); 
    axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/user_info", keyword )
            .then(res => {
                //console.log(res);
                setCheck(res.data.meta);
                setFacebook(res.data.meta.homey_author_facebook);
                setTwitter(res.data.meta.homey_author_twitter);
                setGoogleplus(res.data.meta.homey_author_googleplus);
                setInstagram(res.data.meta.homey_author_instagram);
                setPinterest(res.data.meta.homey_author_pinterest);
                setLinkedin(res.data.meta.homey_author_linkedin);
                
            })
            .catch(err => {console.log(err)});
    if(check.length !=0){
    return (
        <ScrollView contentContainerStyle={{ padding: 10 }}>
            <View style={{ ...styles.alignCenter }}>
                <View style={{ ...styles.card, height: 'auto' }}>
                    {/* <View style={{ paddingTop: 20, paddingBottom: 20, borderBottomWidth: .2, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ ...styles.h2, marginLeft: 10 }}>Social Media</Text>
                    </View> */}
                    <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <View style={{ ...styles.alignCenter }}>
                            <View>
                                <Text>Facebook</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter your Facebook profile address"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value ? value : facebook}
                                        />
                                    )}
                                    name="facebook"
                                    defaultValue=""
                                />

                                <View style={styles.spacer} />

                                <Text>Twitter</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter your Twitter profile address"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value ? value : twitter}
                                        />
                                    )}
                                    name="twitter"
                                    defaultValue=""
                                />

                                <View style={styles.spacer} />

                                <Text>Google Plus</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter your Google profile address"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value ? value : googleplus}
                                        />
                                    )}
                                    name="googleplus"
                                    defaultValue=""
                                />

                                <View style={styles.spacer} />

                                <Text>Instagram</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter your Instagram profile address"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value ? value : instagram}
                                        />
                                    )}
                                    name="instagram"
                                    defaultValue=""
                                />

                                <View style={styles.spacer} />

                                <Text>Pinterest</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter your Pinterest profile address"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value ? value : pinterest}
                                        />
                                    )}
                                    name="pinterest"
                                    defaultValue=""
                                />

                                <View style={styles.spacer} />

                                <Text>Linkedin</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter your Linkedin profile address"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value? value : linkedin}
                                        />
                                    )}
                                    name="linkedin"
                                    defaultValue=""
                                />

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




export default SocialMediaForm
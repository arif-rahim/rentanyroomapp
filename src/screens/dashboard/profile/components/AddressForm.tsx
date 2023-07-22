import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView,SafeAreaView,ActivityIndicator,Dimensions,StyleSheet } from 'react-native';
import styles from '../../../../assets/styles/ProfileStyle';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import Api from "../../../../ApiUrl";
const AddressForm = () => {

    useEffect(() => {
        const bootstrapAsync = async () => {
          let fetchData: any;
          let fetchname: any;
          try {
              fetchData = await SecureStore.getItemAsync('userid');
              global.userid = fetchData;
              fetchname = await SecureStore.getItemAsync('username');
              global.username= fetchname;
          } catch (e) {
          }
    
    
      };
      bootstrapAsync();
    }, [ ]); 
    let user_data = "";
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data : any) => {
        const keyword = {
            user_id: global.userid,
            street_address: data.streetAddress,
            apt_suit: data.AptSuite,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            neighborhood: data.neighborhood,
            country: data.country
        };
          
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/address_form", keyword )
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
        const [address, setUserAddress] = useState(); 
        const [apt_suit, setUserSuit] = useState(); 
        const [city, setUserCity] = useState(); 
        const [state, setUserState] = useState(); 
        const [zipcode, setUserZipcode] = useState(); 
        const [neighborhood, setUserNeighborhood] = useState(); 
        const [country, setNeighborhood] = useState();  
    axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/user_info", keyword )
            .then(res => {
                //console.log(res);
                setCheck(res.data.meta);
                setUserAddress(res.data.meta.homey_street_address);
                setUserSuit(res.data.meta.homey_apt_suit);
                setUserCity(res.data.meta.homey_city);
                setUserState(res.data.meta.homey_state);
                setUserZipcode(res.data.meta.homey_zipcode);
                setUserNeighborhood(res.data.meta.neighborhood);
                setNeighborhood(res.data.meta.homey_neighborhood);
                
            })
            .catch(err => {console.log(err)});
    if(check.length!= 0){
    return (
        <ScrollView contentContainerStyle={{ padding: 10 }}>
            <View style={{ ...styles.alignCenter }}>
                <View style={{ ...styles.card, height: 'auto' }}>
                    {/* <View style={{ paddingTop: 20, paddingBottom: 20, borderBottomWidth: .2, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ ...styles.h2, marginLeft: 10 }}>Address</Text>
                    </View> */}
                    <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <View style={{ ...styles.alignCenter }}>
                            <View>
                                <Text>Street Address</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true
                                    }}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter Street Address"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={ value ? value : address }
                                        />
                                    )}
                                    name="streetAddress"
                                    defaultValue=""
                                />

                                {errors.streetAddress && <Text style={{ color: 'red' }}>Required</Text>}

                                <View style={styles.spacer} />

                                <Text>Apt, Suite</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Ex. #12"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={ value ? value : apt_suit }
                                        />
                                    )}
                                    name="AptSuite"
                                    defaultValue=""
                                />

                                <View style={styles.spacer} />

                                <Text>City</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true
                                    }}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter your City"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={ value ? value : city }
                                        />
                                    )}
                                    name="city"
                                    defaultValue=""
                                />

                                {errors.city && <Text style={{ color: 'red' }}>Required</Text>}

                                <View style={styles.spacer} />

                                <Text>State</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true
                                    }}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter your State"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={ value ? value : state }
                                        />
                                    )}
                                    name="state"
                                    defaultValue=""
                                />

                                {errors.state && <Text style={{ color: 'red' }}>Required</Text>}

                                <View style={styles.spacer} />

                                <Text>Zip Code</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Enter Zip Code"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={ value ? value : zipcode }
                                        />
                                    )}
                                    name="zipcode"
                                    defaultValue=""
                                />

                                <View style={styles.spacer} />

                                <Text>Neighborhood</Text>
                                <View style={styles.spacer} />
                                <Controller
                                    control={control}
                                    rules={{}}
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Neighborhood"
                                            style={{ ...styles.textInput, ...styles.Width1_2 }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={ value ? value : neighborhood }
                                        />
                                    )}
                                    name="neighborhood"
                                    defaultValue=""
                                />

                                <View style={styles.spacer} />

                                <Text>Country</Text>
                                <View style={styles.spacer} />
                                <View style={{ ...styles.textInput, ...styles.Width1_2, padding: 8 }}>
                                    <Controller
                                        control={control}
                                        rules={{}}
                                        render={({ field: { onBlur, onChange, value } }) => (
                                            <Picker
                                                selectedValue={value}
                                                onValueChange={onChange}
                                                mode='dropdown'
                                            >
                                                <Picker.Item label="" value="" enabled={false} />
                                                <Picker.Item label="Pakistan" value="Pakistan" />
                                                <Picker.Item label="India" value="India" />
                                                <Picker.Item label="China" value="China" />
                                            </Picker>
                                        )}
                                        name="country"
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
                </View>
            </View>
        </ScrollView>
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



export default AddressForm
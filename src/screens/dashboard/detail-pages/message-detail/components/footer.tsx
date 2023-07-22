import { MaterialIcons } from "@expo/vector-icons";
import React,{useEffect} from "react";
import { StyleSheet, View, Text, Dimensions,TouchableOpacity, TextInput,ActivityIndicator } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import Api from "../../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';

const Footer = (props,retData) => {
    const [text, stChangeText] = React.useState(true);
    const thread_id= props.msgData.thread_id;
    const [response, setResponse] = React.useState(false);
    //const listing_id= props.route.params.listing_id;
  //console.log(thread_id);
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
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        setResponse(true);
        const keyword = {
            user_id: global.userid,
            listing_id: '0',
            thread_id: thread_id,
            message: data.message,
            listing_image_ids: ['0'] 
        };
        stChangeText(false);
         axios.post((Api.api_url)+"wp-json/jwt-auth/v1/messages/send_message", keyword )
             .then(res => {
               console.log(res.data);
               setResponse(false);
               
               props.parentCallback(res.data);
            })
             .catch(err => {console.log(err)});
    };
    return(
        <View style={[ styles.container, styles.row, styles.alignCenter ]}>
            <Controller
                        control={control}
                        rules={{}}
                        render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={ text ? value : '' }
                placeholder={'Enter Message...'}
            />
            )}
            name="message"
            defaultValue=""
            />
             <TouchableOpacity onPress={handleSubmit(onSubmit)} disabled={response} >
               <MaterialIcons name="send" size={30} color="#008B8B"  />
                                    </TouchableOpacity>
                   {response ?  <View style={styles.loader}>
         <ActivityIndicator size="large" color="#0c9" />
 </View>             
         : ''}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        bottom: 12,
        width: Dimensions.get('screen').width - 30,
        height: 70,
        elevation: 6,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    row: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        width: Dimensions.get('screen').width - 120,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
    },
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});

export default Footer;
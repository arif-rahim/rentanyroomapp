import React,{useState} from 'react';
import { View, Text, Image,ActivityIndicator,SafeAreaView,StyleSheet,Dimensions } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import styles from '../../../../assets/styles/ProfileStyle';
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import Api from "../../../../ApiUrl";

const ProfileComplete = () => {
    const keyword = {
        user_id: global.userid
    };
        const [check, setCheck] = useState([]); 
        const [profile_status, setProfile_status] = useState();     
        const [pro_pic, setPro_pic] = useState(); 
        const [email, setEmail] = useState(); 
        const [em_phone, setEm_phone] = useState(); 
        const [phone, setPhone] = useState();  
    axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/user_info", keyword )
            .then(res => {
                //console.log(res);
                setCheck(res.data.author);
                setProfile_status(res.data.author.profile_status);
                setPro_pic(res.data.author.is_photo);
                setEmail(res.data.author.email);
                setPhone(res.data.author.phone);
                setEm_phone(res.data.author.em_phone);
                
            })
            .catch(err => {console.log(err)});
            if(check.length !=0){       
    return (
        <View style={{ ...styles.alignCenter }}>
            <View style={{ ...styles.card }}>
                <View style={{ ...styles.alignCenter, flex: 0.5, borderColor: 'lightgrey', borderBottomWidth: .2 }}>
                    <Text style={{ ...styles.h2 }}>Profile complete {profile_status}</Text>
                </View>
                <View style={{ ...styles.row, ...styles.alignCenter }}>
                    <View style={{ ...styles.col, ...styles.width, ...styles.height, borderColor: 'lightgrey', borderRightWidth: .2 }}>
                        <View style={styles.alignCenter}>
                            {/* <Image
                            source={require('../../../assets/images/icon.png')}
                            fadeDuration={0}
                            style={{ width: 50, height: 50, borderRadius: 80, borderWidth: 1, resizeMode: 'contain' }}
                        /> */}
                            <FontAwesome name="user-circle-o" size={36} color="lightgrey" />
                            <View style={{ ...styles.alignTextCenter, flex: 0, marginTop: 10 }}>
                                <Text>Profile Picture</Text>
                                {pro_pic !=false ? 
                                <Text style={{ color: 'green' }}>Done</Text>
                                : <Text style={{ color: 'red' }}>Not</Text>}

                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.col, ...styles.width, ...styles.height }}>
                        <View style={styles.alignCenter}>
                            {/* <Image
                            source={require('../../../assets/images/icon.png')}
                            fadeDuration={0}
                            style={{ width: 50, height: 50, borderRadius: 80, borderWidth: 1, resizeMode: 'contain' }}
                        /> */}
                            <MaterialIcons name="email" size={36} color="lightgrey" />
                            <View style={{ ...styles.alignTextCenter, flex: 0, marginTop: 10 }}>
                                <Text>Emial Address</Text>
                                {email !=false ? 
                                <Text style={{ color: 'green' }}>Done</Text>
                                : <Text style={{ color: 'red' }}>Not</Text>}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ ...styles.row, ...styles.alignCenter }}>
                    <View style={{ ...styles.col, ...styles.width, ...styles.height, borderColor: 'lightgrey', borderRightWidth: .2 }}>
                        <View style={styles.alignCenter}>
                            {/* <Image
                            source={require('../../../assets/images/icon.png')}
                            fadeDuration={0}
                            style={{ width: 50, height: 50, borderRadius: 80, borderWidth: 1, resizeMode: 'contain' }}
                        /> */}
                            <MaterialCommunityIcons name="whatsapp" size={36} color="lightgrey" />
                            <View style={{ ...styles.alignTextCenter, flex: 0, marginTop: 10 }}>
                                <Text>Phone Number</Text>
                                {phone !=false ? 
                                <Text style={{ color: 'green' }}>Done</Text>
                                : <Text style={{ color: 'red' }}>Not</Text>}
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.col, ...styles.width, ...styles.height }}>
                        <View style={styles.alignCenter}>
                            {/* <Image
                            source={require('../../../assets/images/icon.png')}
                            fadeDuration={0}
                            style={{ width: 50, height: 50, borderRadius: 80, borderWidth: 1, resizeMode: 'contain' }}
                        /> */}
                            <MaterialCommunityIcons name="deskphone" size={36} color="lightgrey" />
                            <View style={{ ...styles.alignTextCenter, flex: 0, marginTop: 10 }}>
                                <Text>Emergency</Text>
                                {em_phone !=false ? 
                                <Text style={{ color: 'green' }}>Done</Text>
                                : <Text style={{ color: 'red' }}>Not</Text>}
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    {/* <View style={{ width: '100%', height: 50, backgroundColor: '#54c4d9', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                        <View style={{ ...styles.alignTextCenter, flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 10 }}>Progress</Text>
                            <Text style={{ marginLeft: 80 }}>100%</Text>
                        </View>
                    </View> */}
                </View>
            </View>
        </View>
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



export default ProfileComplete
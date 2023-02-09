import React from "react";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import Api from "../ApiUrl";

const useAuthMemo = ( dispatch: (arg0: { type: string; token: string | null; }) => void ) => React.useMemo(
    () => ({
        signIn: async (data: any) => {
            let userToken = null;
            let useremail = null;
            let username = null;
            let userid = null;
            let userAvatar = null;
            let userrole = null;
            const loginData = {
                username: data.email,
                password: data.password
            }; 
            let datan = await axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token", loginData )
                .then(res => {
                    userToken = res.data.token;
                    useremail = res.data.user_email;
                    username = res.data.user_display_name;
                    userid = res.data.user_id;
                    userAvatar = res.data.photo;
                    userrole = res.data.roles;
                    SecureStore.setItemAsync("token", userToken);
                    SecureStore.setItemAsync("email", useremail);
                    SecureStore.setItemAsync("username", username);
                    SecureStore.setItemAsync("userid", userid);
                    SecureStore.setItemAsync("useravatar", userAvatar);
                    SecureStore.setItemAsync("userrole", userrole);
                })
                .catch(err => {console.log(err)});

            let email = await SecureStore.getItemAsync('email');
            let pass = await SecureStore.getItemAsync('password');
            dispatch({ type: 'SIGN_IN', token: userToken });
        },
        signOut: async () => {
            console.log(SecureStore.getItemAsync("userid"));
            await SecureStore.deleteItemAsync('token');
            await SecureStore.deleteItemAsync("email");
            await SecureStore.deleteItemAsync("username");
            await SecureStore.deleteItemAsync("userid"); 
            await SecureStore.deleteItemAsync("useravatar");
            await SecureStore.deleteItemAsync("userrole");
            global.userid ='';
            dispatch({ type: 'SIGN_OUT', token: null })
        },
        signUp: async (data: any) => {
            
            const keyword = {
               
                username: data.username,
                useremail: data.useremail,
                password: data.password,
                role: data.role
            };
            let datan = await axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/register", keyword )
                .then(res => {
                    //console.log(dummyData);
                     SecureStore.setItemAsync("action_message", '');
                    SecureStore.setItemAsync("action_message",res.data.data.error);
                   console.log(res.data.data.error);
                }) 
                .catch(err => {console.log(err)});


        },
    }),
    []
);



export { useAuthMemo }
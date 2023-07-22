import React,{useState} from "react";
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
                password: data.password?data.password:data.id,
                device_token:data.expoPushToken
            }; 
            try {
                const res = await axios.post((Api.api_url) + "wp-json/jwt-auth/v1/token", loginData);
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
                    SecureStore.setItemAsync("device_token", userToken);
                   
                if(res.data.status){
                return { success: true, token: res.data.status.errors.incorrect_password?res.data.status.errors.incorrect_password:res.data.status.errors.invalid_username?res.data.status.errors.invalid_username:["Plese enter valid information"] };
                }
                let email = await SecureStore.getItemAsync('email');
                let pass = await SecureStore.getItemAsync('password');
                dispatch({ type: 'SIGN_IN', token: userToken });
              } catch (error) { 
                
                return { success: false, token: [error.message] };
              }
            // let datan = await axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token", loginData )
            //     .then(res => {
            //         //console.log(res.data.status.errors.incorrect_password);
            //         if(res.data.status.errors.incorrect_password){
            //         error=res.data.status.errors.incorrect_password;}
                    
            //         console.log(loginData);
            //         return "ok";
                    
                    
            //     })
            //     .catch(err => {console.log(err); return { success: true, error: "ok"};});

            
        },
        signOut: async () => {
          
            await SecureStore.deleteItemAsync('token');
            await SecureStore.deleteItemAsync("email");
            await SecureStore.deleteItemAsync("username");
            await SecureStore.deleteItemAsync("userid"); 
            await SecureStore.deleteItemAsync("useravatar");
            await SecureStore.deleteItemAsync("userrole");
            global.userid ='';
            dispatch({ type: 'SIGN_OUT', token: null })
        },
        signUp: async (data: any, signIn: any) => {
              var check = false;
            const keyword = {
                username: data.username?data.username: data.given_name+''+data.family_name?data.given_name+''+data.family_name:data.name,
                useremail: data.useremail?data.useremail: data.email?data.email:data.name,
                password: data.password?data.password: data.id,
                role: data.role?data.role:'',
                device_token:data.expoPushToken
            };
            try {
                const res = await axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/register", keyword )
                
                     SecureStore.setItemAsync("action_message", '');
                    SecureStore.setItemAsync("action_message",res.data.error);
                    console.log(res.data);
                    
                if(res.data.status==200)
                {
 
                 let userToken = null;
                 let useremail = null;
                 let username = null;
                 let userid = null;
                 let userAvatar = null;
                 let userrole = null;
                 const loginData = {
                     username: data.username?data.username: data.given_name+''+data.family_name?data.given_name+''+data.family_name:data.name,
                     password: data.password?data.password:data.id,
                     device_token:data.expoPushToken
                 }; 
                 const datan = await axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token", loginData )
                 try {
                         
                         userToken = datan.data.token;
                         useremail = datan.data.user_email;
                         username = datan.data.user_display_name;
                         userid = datan.data.user_id;
                         userAvatar = datan.data.photo;
                         userrole = datan.data.roles;
                         SecureStore.setItemAsync("token", userToken);
                         SecureStore.setItemAsync("email", useremail);
                         SecureStore.setItemAsync("username", username);
                         SecureStore.setItemAsync("userid", userid);
                         SecureStore.setItemAsync("useravatar", userAvatar);
                         SecureStore.setItemAsync("userrole", userrole);
                          
                         if(datan.data.status){
                            return { success: true, token: datan.data.status.errors.incorrect_password?datan.data.status.errors.incorrect_password:res.data.status.errors.invalid_username?res.data.status.errors.invalid_username:["Plese enter valid information"] };
                            }
                            let email = await SecureStore.getItemAsync('email');
                            let pass = await SecureStore.getItemAsync('password');
                            dispatch({ type: 'SIGN_IN', token: userToken });   
                     }
                     catch (error) {
                        
                        return { success: false, token: [error.message] };
                      }
     
                 
 
                }
                return { success: false, token: [res.data.error] };
                
            } catch (error) {
               
                return { success: false, token: [error.message] };
              }
              

        },
        
    }),
    []
);



export { useAuthMemo }
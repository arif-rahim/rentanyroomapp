import React from 'react';
import { ScrollView, View } from 'react-native';

import styles from '../../../assets/styles/ProfileStyle';

import ProfileComplete      from './components/ProfileStatus';
import UploadImage          from './components/UploadImage';
import InformationForm      from './components/InformationForm';
import AddressForm          from './components/AddressForm';
import EmergencyContactForm from './components/EmergencyContactForm';
import SocialMediaForm      from './components/SocialMediaForm';


const Profile = () => { 
    return (
        <ScrollView contentContainerStyle={{ padding: 10 }}>
            <View style={styles.alignCenter}>
                <ProfileComplete />
                <View style={ styles.spacer }/>
                <UploadImage />
                <View style={ styles.spacer }/>
                <InformationForm />
                <View style={ styles.spacer }/>
                <AddressForm />
                <View style={ styles.spacer }/>
                <EmergencyContactForm />
                <View style={ styles.spacer }/>
                <SocialMediaForm />
            </View>
        </ScrollView >
    );
}



export default Profile
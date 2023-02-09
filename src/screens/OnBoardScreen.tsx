import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const AuthIndicator = () => {
    return( 
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
        </View>
    );
}

export default AuthIndicator
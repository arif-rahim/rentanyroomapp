import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../../../assets/styles/ProfileStyle';


const UploadImage = () => {
    return (
        <View style={{ ...styles.alignCenter }}>
            <View style={{ ...styles.card }}>
                {/* <View style={{ flex: 1, borderBottomWidth: .2, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ ...styles.h2, ...styles.alignTextCenter, textAlign: 'left', marginLeft: 10, }}>Photo</Text>
                    </View> */}
                <View style={{ ...styles.alignCenter, flex: 6 }}>
                    <View style={{ borderRadius: 100, backgroundColor: 'lightgrey', width: 160, height: 160 }}>
                        <Text style={{ ...styles.alignTextCenter }}>160 X 160</Text>
                    </View>
                    <View>
                        <View style={{ marginTop: 20, ...styles.alignTextCenter, flex: 0 }}>
                            <Text style={{ ...styles.p, fontWeight: 'bold' }}>Choose an Image</Text>
                            <Text style={{}}>Minimum size 100 X 100 px</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ ...styles.btnContainer }}>
                                <Text style={{ color: 'white' }}>Browse</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.btnContainer, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgrey' }}>
                                <Text style={{ color: 'grey' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}





export default UploadImage
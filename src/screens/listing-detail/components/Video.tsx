import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const EmbedVideo = (item) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const video_url=item.data.video_url;
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: video_url,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        width: Dimensions.get('screen').width,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default EmbedVideo
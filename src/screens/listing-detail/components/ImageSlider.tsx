import React, { useRef, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
    Pressable,ActivityIndicator
} from "react-native";
import ImageViewModal from "../../../modals/ImageViewModal";

const imagess = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');

const ImageSlider = (item) => {
    const images = item.data.gallery;
    const [modalVisible, setModalVisible] = useState(false);
    
    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();

    return (
        <View style={styles.scrollContainer}>
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }
                ],
                    {
                        useNativeDriver: false
                    }
                )}
                scrollEventThrottle={1}
            >
                {images.map((image, imageIndex) => {
                    return (
                        <Pressable key={imageIndex} onPress={() => setModalVisible(true)}>
                            <View
                                style={{ width: windowWidth, height: 280 }}
                                key={imageIndex}
                            >
                                {image?
                                <ImageBackground source={{ uri: image }} style={styles.card}>
                                     {/*<View style={styles.textContainer}>
                                        <Text style={styles.infoText}>
                                            {"Image - " + imageIndex}
                                        </Text> 
                                    </View>*/}
                                </ImageBackground>: <ActivityIndicator size="large" color="#0c9" />
                                }
                            </View>
                            <ImageViewModal _image={image} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                        </Pressable>
                    );
                })}
            </ScrollView>
            <View style={styles.indicatorContainer}>
                {images.map((image, imageIndex) => {
                    const width = scrollX.interpolate({
                        inputRange: [
                            windowWidth * (imageIndex - 1),
                            windowWidth * imageIndex,
                            windowWidth * (imageIndex + 1)
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: "clamp"
                    });
                    return (
                        <Animated.View
                            key={imageIndex}
                            style={[styles.normalDot, { width }]}
                        />
                    );
                })}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        backgroundColor: "rgba(0,0,0, 0.7)",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5
    },
    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default ImageSlider;
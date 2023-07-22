import React, { useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Animated, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

let flatList

const Carousel = ({
    data,
    title = '',
    disc = '',
    dotView = false,
    horizontal = false,
    pagingEnabled = false,
    HeaderComponent = any,
    component = any,
    whiteSpace = false,
    spaceBetween = 0,
    initialNumToRender = 6,
    customStyle = {}
}) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const navigation = useNavigation()


    if (data && data.length) {
        return (
            <View style={{ marginBottom: 50, ...customStyle.container }}>
                <View style={{ ...styles.textView, ...customStyle.textView }}>
                    {title != '' ? <Text style={{ ...styles.heading, ...customStyle.title }}>{title}</Text> : <></>}
                    {disc != '' ? <Text style={{ ...styles.text, ...customStyle.text }}>{disc}</Text> : <></>}
                </View>

                <FlatList data={data}
                    //ref={(flatList) => { this.flatList = flatList }}
                    ListHeaderComponent={HeaderComponent?<HeaderComponent data={data}/>:null}
                    keyExtractor={(item) => 'key' + item.id}
                    horizontal={horizontal}
                    pagingEnabled={pagingEnabled}
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    initialNumToRender={initialNumToRender}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return component({ item, navigation })
                    }}
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
                />
                
                {dotView && <View style={{ margin: spaceBetween }} />}

                {dotView ? (<View style={styles.indicatorContainer}>
                    {data.map((image, imageIndex) => {
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
                </View>) : whiteSpace ? <View style={{ width: windowWidth, height: 100, backgroundColor: 'white', ...customStyle.whiteSpace }} /> : null}
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}




const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        marginBottom: 4
    },
    text: {
        fontSize: 12
    },
    textView: {
        margin: 10
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})




export default Carousel
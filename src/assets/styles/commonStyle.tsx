import { StyleSheet } from "react-native";

const common = StyleSheet.create({
    button: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f15e75',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    status: {
        backgroundColor: '#fcb900',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    closeButton: {
        width: 30,
        height: 30,
        backgroundColor: '#f15e75',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6
    },
    textInput: {
        // width: Dimensions.get('screen').width / 1.5,
        height: 40,
        borderColor: "lightgrey",
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 2,
    },
});

export default common;
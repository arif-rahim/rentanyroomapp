import { StyleSheet } from "react-native";
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors'

const { width, height } = Layout.window;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
    },
    alignCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inner: {
        padding: 24,
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: width / 1.2,
        height: height / 1.5,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10
    },
    spacer: {
        height: 10,
    },
    iconBtn: {
        width: width / 1.5,
        height: 40,
        borderWidth: 2,
    },
    facebook: {
        borderColor: '#3b5998',
    },
    google: {
        borderColor: 'red',
    },
    textInput: {
        width: width / 1.5,
        height: 40,
        borderColor: "lightgrey",
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 2,
    },
    btnContainer: {
        width: width / 1.5,
        backgroundColor: Colors.light.buttonColor,
        marginTop: 12,
        borderRadius: 5,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    modal: {
        paddingTop: 10,
        padding: 5,
        //flex: 1,
        //justifyContent: "center",
        alignItems: "center",
        width: width / 1.2,
        height: height / 2,
        borderRadius: 10,
        backgroundColor: 'grey',
        elevation: 10
    }
});

export default styles
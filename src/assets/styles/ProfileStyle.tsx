import { StyleSheet } from "react-native";
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

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
    alignTextCenter: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center', 
        textAlignVertical: 'center'
    },
    btnContainer: {
        width: width / 1.3,
        backgroundColor: Colors.light.buttonColor,
        marginTop: 12,
        borderRadius: 5,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    Width1_2: {
        width: width / 1.2
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
    spacer: {
        height: 10,
    },
    card: {
        backgroundColor: 'white',
        width: width/1.1,
        height: height/1.5,
        borderRadius: 10,
    },
    innerCard: {

    },
    row: {
        flexDirection: 'row'
    },
    col: {
        flexDirection: 'column'
    },
    h2: {
        fontSize: 20,
    },
    p: {
        fontSize: 16,
    },
    width: {
        width: '50%'
    },
    height: {
        height: '100%'
    },
});



export default styles
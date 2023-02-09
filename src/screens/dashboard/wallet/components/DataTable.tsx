import React,{useState,useEffect} from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DataTable } from "react-native-paper";


const dataTable = ({ title = '', status = false,data, onPress }) => {
  
    const [Comfort_array, setComfort_array] = useState([]);
    useEffect(() => {
    setComfort_array(data);
}, []);  
    return (
        <DataTable style={styles.card}>

            <View style={styles.titleSection}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>View All</Text>
                </TouchableOpacity>
            </View>

            <DataTable.Header>
                <DataTable.Title
                    textStyle={[status ? { fontSize: 10 } : {}]}
                >
                    {status ? 'Date Requested' : 'Dessert'}
                </DataTable.Title>

                <DataTable.Title
                    style={[status ? {} : styles.date]}
                    textStyle={[status ? { fontSize: 10 } : {}]}
                >
                    {status ? 'Amount' : 'Date'}
                </DataTable.Title>

                <DataTable.Title
                    style={[status ? styles.marginRight : styles.listing]}
                    textStyle={[status ? { fontSize: 10 } : {}]}
                >
                    {status ? 'Status' : 'Listing'}
                </DataTable.Title>

                <DataTable.Title
                    style={[status ? {} : styles.amount]}
                    textStyle={[status ? { fontSize: 10 } : {}]}
                    numeric
                >
                    {status ? 'Date Processed' : 'Net Amount'}
                </DataTable.Title>
            </DataTable.Header>

            <ScrollView>
            {Comfort_array.map((localState, index) => ( 
                <DataTable.Row>
                    <DataTable.Cell
                        textStyle={[status ? { fontSize: 10 } : {}]}
                    >
                        {status ? localState.date_requested : localState.id}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.date]}
                        textStyle={[status ? {} : { fontSize: 10 }]}
                    >
                        {status ? localState.amount : localState.date}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? styles.marginRight : styles.listing]}
                        textStyle={{ fontSize: 10 }}
                    >
                        {status ? <View style={styles.status} >
                            <Text style={{ color: 'white', fontSize: 10 }}>{localState.payout_status}</Text>
                        </View> : localState.listing}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.amount]}
                        textStyle={[status ? { fontSize: 10 } : {}]}
                        numeric
                    >
                        ${status ? localState.date_processed : localState.net_earnings}
                    </DataTable.Cell>
                </DataTable.Row>
                ))}

                {/* <DataTable.Row>
                    <DataTable.Cell
                        textStyle={[status ? { fontSize: 10 } : {}]}
                    >
                        {status ? '10 Mar, 2019' : '#0001'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.date]}
                        textStyle={[status ? {} : { fontSize: 10 }]}
                    >
                        {status ? '$900.00' : '12 Mar, 2019'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? styles.marginRight : styles.listing]}
                        textStyle={{ fontSize: 10 }}
                    >
                        {status ? <View style={styles.status}>
                            <Text style={{ color: 'white', fontSize: 10 }}>Pending</Text>
                        </View> : 'Appartment For Rent'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.amount]}
                        textStyle={[status ? { fontSize: 10 } : {}]}
                        numeric
                    >
                        {status ? '12 Mar, 2019' : '$60.0'}
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell
                        textStyle={[status ? { fontSize: 10 } : {}]}
                    >
                        {status ? '10 Mar, 2019' : '#0001'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.date]}
                        textStyle={[status ? {} : { fontSize: 10 }]}
                    >
                        {status ? '$900.00' : '12 Mar, 2019'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? styles.marginRight : styles.listing]}
                        textStyle={{ fontSize: 10 }}
                    >
                        {status ? <View style={styles.status}>
                            <Text style={{ color: 'white', fontSize: 10 }}>Pending</Text>
                        </View> : 'Appartment For Rent'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.amount]}
                        textStyle={[status ? { fontSize: 10 } : {}]}
                        numeric
                    >
                        {status ? '12 Mar, 2019' : '$60.0'}
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell
                        textStyle={[status ? { fontSize: 10 } : {}]}
                    >
                        {status ? '10 Mar, 2019' : '#0001'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.date]}
                        textStyle={[status ? {} : { fontSize: 10 }]}
                    >
                        {status ? '$900.00' : '12 Mar, 2019'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? styles.marginRight : styles.listing]}
                        textStyle={{ fontSize: 10 }}
                    >
                        {status ? <View style={styles.status}>
                            <Text style={{ color: 'white', fontSize: 10 }}>Pending</Text>
                        </View> : 'Appartment For Rent'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.amount]}
                        textStyle={[status ? { fontSize: 10 } : {}]}
                        numeric
                    >
                        {status ? '12 Mar, 2019' : '$60.0'}
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell
                        textStyle={[status ? { fontSize: 10 } : {}]}
                    >
                        {status ? '10 Mar, 2019' : '#0001'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.date]}
                        textStyle={[status ? {} : { fontSize: 10 }]}
                    >
                        {status ? '$900.00' : '12 Mar, 2019'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? styles.marginRight : styles.listing]}
                        textStyle={{ fontSize: 10 }}
                    >
                        {status ? <View style={styles.status}>
                            <Text style={{ color: 'white', fontSize: 10 }}>Pending</Text>
                        </View> : 'Appartment For Rent'}
                    </DataTable.Cell>

                    <DataTable.Cell
                        style={[status ? {} : styles.amount]}
                        textStyle={[status ? { fontSize: 10 } : {}]}
                        numeric
                    >
                        {status ? '12 Mar, 2019' : '$60.0'}
                    </DataTable.Cell>
                </DataTable.Row> */}
                
            </ScrollView>

        </DataTable>
    );
}


const styles = StyleSheet.create({
    container: {

    },
    card: {
        width: Dimensions.get('screen').width - 20,
        height: 350,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 6,
        marginTop: 15,
        marginBottom: 15
    },
    date: {
        marginLeft: -50
    },
    listing: {
        marginLeft: -40
    },
    amount: {
        marginLeft: -30
    },
    marginRight: {
        marginRight: -40
    },
    title: {
        fontSize: 22
    },
    titleSection: {
        elevation: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    button: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f15e75',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 6
    },
    status: {
        backgroundColor: '#fcb900',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    }
});


export default dataTable;
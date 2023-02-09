import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Messages from "./components/messages";
import axios from "axios";
import Api from "../../../ApiUrl";
import { useEffect, useState } from "react";

const MessagingPage = () => {
   
    return(
        <SafeAreaView>
            <FlatList 
                data={null}
                ListHeaderComponent={null}
                ListFooterComponent={Messages}
                renderItem={null}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default MessagingPage;
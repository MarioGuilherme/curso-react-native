import React from "react";
import { StyleSheet, View } from "react-native";

export default () => {
    return (
        <View style={styles.FlexV4}>
            <View style={styles.V0}/>
            <View style={styles.V1}/>
            <View style={styles.V2}/>
        </View>
    );
};

const styles = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: "#000"
    },
    V0: {
        backgroundColor: "#990",
        height: 300
    },
    V1: {
        backgroundColor: "#34eb6b",
        flexGrow: 3
    },
    V2: {
        backgroundColor: "#8312ed",
        flexGrow: 1
    }
});
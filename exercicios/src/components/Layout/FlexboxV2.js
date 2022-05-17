import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default () => {
    return (
        <View style={styles.FlexV2}>
            <Quadrado cor="#990"/>
            <Quadrado cor="#8312ed"/>
            <Quadrado cor="#34eb6b"/>
            <Quadrado cor="#00F"/>
            <Quadrado cor="#099"/>
        </View>
    );
};

const styles = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        backgroundColor: "#000"
    }
});
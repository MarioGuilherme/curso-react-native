import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default () => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado cor="#990"/>
            <Quadrado cor="#8312ed"/>
            <Quadrado cor="#34eb6b"/>
            <Quadrado cor="#00F"/>
            <Quadrado cor="#099"/>
        </View>
    );
};

const styles = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "#000",
    }
});
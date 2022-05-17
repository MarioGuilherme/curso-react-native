import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default () => {
    return (
        <View style={styles.FlexV3}>
            <Quadrado cor="#990" lador={20}/>
            <Quadrado cor="#8312ed" lador={30}/>
            <Quadrado cor="#34eb6b" lador={40}/>
            <Quadrado cor="#00F" lador={50}/>
            <Quadrado cor="#099" lador={60}/>
        </View>
    );
};

const styles = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        height: 350,
        width: "100%",
        backgroundColor: "#000"
    }
});
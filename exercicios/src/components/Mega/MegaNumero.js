import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../styles";

export default ({ num }) => {
    return (
        <View style={Localstyles.Container}>
            <Text style={[styles.txtG, Localstyles.Numero]}>
                {num}
            </Text>
        </View>
    );
};

const Localstyles = StyleSheet.create({
    Container: {
        with: 50,
        heigth: 50,
        backgroundColor: "#000",
        margin: 5,
        borderRadius: 25,
    },
    Numero: {
        color: "#FFF",
    }
});
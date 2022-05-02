import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../styles";

export default ({ num }) => {
    return (
        <View style={newStyles.Display}>
            <Text style={[styles.txtG, newStyles.DisplayText]}>
                {num}
            </Text>
        </View>
    );
};

const newStyles = StyleSheet.create({
    Display: {
        backgroundColor: "#000",
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: "#FFF"
    }
});
import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

export default ({ bgColor, onLevelSelected, percentage, label }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} onPress={() => onLevelSelected(percentage)}>
            <Text style={styles.buttonLabel}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: "#EEE",
        fontWeight: "bold"
    }
});
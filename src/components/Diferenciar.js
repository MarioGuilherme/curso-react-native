import React from "react";
import { Text, Platform } from "react-native";
import styles from "./styles";

export default () => {
    if (Platform.OS == "android")
        return (
            <Text style={styles.txtG}>
                Android
            </Text>
        );
    else if (Platform.OS == "ios")
        return (
            <Text style={styles.txtG}>
                iOS
            </Text>
        );
    else
        return (
            <Text style={styles.txtG}>
                {Platform.OS}
            </Text>
        );
};
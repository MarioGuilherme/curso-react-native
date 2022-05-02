import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default ({ num }) => {
    return (
        <View>
            <Text style={styles.txtG}>O resultado é: </Text>
            <Text style={styles.txtG}>
                {((num || 0) % 2 == 0) ? "Par" : "Ímpar"}
            </Text>
        </View>
    );
};
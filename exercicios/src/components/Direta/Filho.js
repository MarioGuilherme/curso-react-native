import React from "react";
import { Text } from "react-native";
import styles from "../styles";

export default ({ a, b }) => {
    return (
        <>
            <Text style={styles.txtG}>
                {a}
            </Text>
            <Text style={styles.txtG}>
                {b}
            </Text>
        </>
    );
};
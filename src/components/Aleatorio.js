import React from "react";
import { Text } from "react-native";
import styles from "./styles";

export default ({ min, max }) => {
    const delta = max - min + 1;
    const valor = parseInt(Math.random() * delta) + min;

    return (
        <Text style={styles.txtG}>
            O valor aleatório gerado foi: {valor}
        </Text>
    );
};
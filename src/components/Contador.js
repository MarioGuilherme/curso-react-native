import React, { useState } from "react";
import { Text, Button } from "react-native";
import styles from "./styles";

export default ({ inicial = 0, passo = 1 }) => {
    const [numero, setNumero] = useState(inicial); // Retorna o numero e uma função para setar uma novo valor à variável numero

    const inc = () => setNumero(numero + passo);
    const dec = () => setNumero(numero - passo);

    return (
        <>
            <Text style={styles.txtG}>
                {numero}
            </Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    );
};
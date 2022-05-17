import React, { useState } from "react";
import { Text } from "react-native";
import styles from "../styles";
import ContadorDisplay from "./ContadorDisplay";
import ContadorButoes from "./ContadorButoes";

export default () => {
    const [num, setNum] = useState(0);

    const inc = () => setNum(num+1);
    const dec = () => setNum(num-1);

    return (
        <>
            <Text style={styles.txtG}>
                Contador
            </Text>
            <ContadorDisplay num={num}/>
            <ContadorButoes inc={inc} dec={dec}/>
        </>
    );
};
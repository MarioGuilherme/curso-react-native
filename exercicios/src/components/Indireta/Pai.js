import React, { useState } from "react";
import Filho from "./Filho";
import { Text } from "react-native";
import styles from "../styles"

export default () => {
    const [texto, setText] = useState("");
    const [num, setNum] = useState(0);

    return (
        <>
            <Text style={styles.txtG}>
                {texto}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={(num, texto) => {
                    setNum(num);
                    setText(texto);
                }}
            />
        </>
    );
};
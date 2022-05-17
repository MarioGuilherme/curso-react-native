import React from "react";
import { View } from "react-native";

export default ({ lador, cor }) => {
    const varLado = lador || 50;
    return (
        <View style={{
            height: varLado,
            width: varLado,
            backgroundColor: cor || "#000"
        }}/>
    );
};
import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

export default () => {
    const [nome, setNome] = useState("Mário");

    return (
        <View>
            <Text>
                {nome}
            </Text>
            <TextInput placeholder="Digite seu Nome" value={nome} onChangeText={nome => setNome(nome)} />
        </View>
    );
};
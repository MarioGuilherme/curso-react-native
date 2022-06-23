import React from "react";
import {
    View,
    Button
} from "react-native";

export default ({ voltar, avancar, avancarParam, navigation, children }) => (
    <View style={{ flex: 1} }>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {voltar ? <Button title="Voltar" onPress={navigation.goBack}/> : false}
            {avancar ? <Button title="Avançar" onPress={() => navigation.navigate(avancar, avancarParam)}/> : false}
        </View>
        <View style={{ flex: 1} }>
            {children}
        </View>
    </View>
);
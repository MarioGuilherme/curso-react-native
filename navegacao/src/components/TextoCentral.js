import React from "react";
import {
    View,
    Text
} from "react-native";

export default ({ corFundo, corTxt, children }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: corFundo || "#000" }}>
        <Text style={{ fontSize: 50, color: corTxt || "#FFF" }}>
            {children}
        </Text>
    </View>
);
import React from "react";
import TextoCentral from "../components/TextoCentral";
import { View, Button } from "react-native";

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Button title="Abrir" onPress={() => {
                    navigation.openDrawer();
                    setTimeout(() => {
                        navigation.closeDrawer();
                        setInterval(() => {
                            navigation.toggleDrawer();
                        }, 1000)
                    }, 3000);
                }}/>
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo="#33FA72" corTxt="#000">
                    Tela D
                </TextoCentral>
            </View>
        </View>
    );
}
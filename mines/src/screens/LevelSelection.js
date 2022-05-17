import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal
} from "react-native";
import Select from "./Select";

export default ({ onCancel, isVisible, onLevelSelected }) => {
    return (
        <Modal onRequestClose={onCancel} visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Selecione o Nivel
                    </Text>
                    <Select bgColor="#49B65D" onLevelSelected={onLevelSelected} percentage={0.1} label="Fácil"/>
                    <Select bgColor="#2765f7" onLevelSelected={onLevelSelected} percentage={0.2} label="Intermediário"/>
                    <Select bgColor="#F26337" onLevelSelected={onLevelSelected} percentage={0.3} label="Difícil"/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    container: {
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: "center",
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    }
});
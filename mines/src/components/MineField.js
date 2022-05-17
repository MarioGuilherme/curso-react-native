import React from "react";
import { View, StyleSheet } from "react-native";
import Field from "./Field";

export default ({ board, onOpenField, onSelectField }) => {
    const row = board.map((row, r) => {
        const cols = row.map((field, c) => {
            return <Field {...field} key={c} onOpen={() => onOpenField(r, c)} onSelect={() => onSelectField(r, c)}/>;
        });
        return <View key={r} style={{ flexDirection: "row" }}>{cols}</View>;
    });
    return <View style={styles.container}>{row}</View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEE"
    }
});
import React, { useContext, useState } from "react";
import { Text, StyleSheet, TextInput, View, Button } from "react-native";
import UsersContext from "../Context/UsersContext";

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params || {})
    const { dispatch } = useContext(UsersContext);

    return (
        <View style={styles.form}>
            <Text>
                Name
            </Text>
            <TextInput style={styles.input} value={user.name} placeholder="Informe o Nome" onChangeText={name => setUser({ ...user, name })}/>
            <Text>
                Email
            </Text>
            <TextInput style={styles.input} value={user.email} placeholder="Informe o E-mail" onChangeText={email => setUser({ ...user, email })}/>
            <Text>
                URL do avatar
            </Text>
            <TextInput style={styles.input} value={user.avatarUrl} placeholder="Informe o URL do Avatar" onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}/>
            <Button title="Salvar" onPress={() => {
                dispatch({
                    type: user.id ? "updateUser" : "createUser",
                    payload: user
                });
                navigation.goBack();
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    form:{
        padding: 12
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10
    }
});
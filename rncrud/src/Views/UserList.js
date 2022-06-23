import React, { useContext } from "react";
import { View, FlatList, Alert } from "react-native";
import { Button, Icon, ListItem } from "react-native-elements";
import UsersContext from "../Context/UsersContext";

export default ({ navigation }) => {

    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDelete(user) {
        Alert.alert("Excluir Usuário", "Deseja excluir o usuário ?", [
            {
                text: "Sim",
                onPress() {
                    dispatch({
                        type: "deleteUser",
                        payload: user
                    })
                }
            },
            {
                text: "Não"
            }
        ]);
    }

    function getActions(user) {
        return (
            <>
                <Button onPress={() => navigation.navigate("UserForm", user)} type="clear" icon={<Icon name="edit" size={25} color="orange"/>}/>
                <Button onPress={() => confirmUserDelete(user)} type="clear" icon={<Icon name="delete" size={25} color="red"/>}/>
            </>
        );
    }

    function getUsersItem({ item: user }) {
        return (
            <ListItem leftAvatar={{ source: { uri: user.avatarUrl } }} key={user.id} title={user.name} subtitle={user.email} bottomDivider rightElement={getActions(user)}/>
        );
    }

    return (
        <View>
            <FlatList data={state.users} keyExtractor={user => user.id.toString()} renderItem={getUsersItem}/>
        </View>
    );
}
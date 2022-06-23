import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./Views/UserList";
import UserForm from "./Views/UserForm";
import { Button, Icon } from "react-native-elements";
import { UsersProvider } from "./Context/UsersContext";

const Stack = createNativeStackNavigator();

export default () => (
    <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
                <Stack.Screen name="UserList" component={UserList} options={
                    ({ navigation }) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button onPress={() => navigation.navigate("UserForm")} type="clear" icon={<Icon name="add" size={25} color="#FFF"/>}/>
                            )
                        }
                    }
                }/>
                <Stack.Screen name="UserForm" component={UserForm} options={{ title: "Formulário de Usuários" }}/>
            </Stack.Navigator>
        </NavigationContainer>
    </UsersProvider>
);

const screenOptions = {
    headerStyle: {
        backgroundColor: "#F4511E"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
        fontWeight: "bold"
    }
}
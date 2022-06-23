import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case "TelaA":
                        iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                        break;
                        
                    case "TelaB":
                        iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                        break;

                    case "TelaC":
                        iconName = focused ? "ios-list-box" : "ios-list";
                        break;
                }

                return <Ionicons name={iconName} size={size} color={color}/>;
            }
        })} initialRouteName="TelaB" tabBarOptions={{ activeTintColor: "red", inactiveTintColor: "blue", showLabel: true }}>
        <Tab.Screen options={{ title: "Início" }} name="TelaA" component={TelaA}/>
        <Tab.Screen options={{ title: "Meio" }} name="TelaB" component={TelaB}/>
        <Tab.Screen options={{ title: "Fim" }} name="TelaC" component={TelaC}/>
    </Tab.Navigator>
);
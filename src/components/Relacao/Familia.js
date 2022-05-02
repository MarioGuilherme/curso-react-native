import React from "react";
import { Text } from "react-native";

export default ({ children }) => {
    return (
        <>
            <Text>
                [Início] Membros da Família:
            </Text>
            {children}
            <Text>
                [Fim] Membros da Família:
            </Text>
        </>
    );
};
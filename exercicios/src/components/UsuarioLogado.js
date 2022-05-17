import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import If from "./If";

export default props => {
    const usuario = props.usuario || {};
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={styles.txtG}>Usuário Logado:</Text>
                <Text style={styles.txtG}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    );
};
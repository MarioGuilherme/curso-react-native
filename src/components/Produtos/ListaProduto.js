import React from "react";
import { Text } from "react-native";
import styles from "../styles";
import produtos from "./produtos";

export default () => {
    function obterLista() {
        return produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.nome} custa {p.preco}
                </Text>
            )
        })
    }

    return (
        <>
            <Text style={styles.txtG}>
                Lista de Produtos:
            </Text>
            {obterLista()}
        </>
    );
};
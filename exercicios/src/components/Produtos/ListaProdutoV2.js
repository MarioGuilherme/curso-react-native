import React from "react";
import { Text, FlatList } from "react-native";
import styles from "../styles";
import produtos from "./produtos";

export default () => {
    const renderProdutos = ({item: p}) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={styles.txtG}>
                Lista de Produtos V2:
            </Text>
            <FlatList data={produtos} keyExtractor={i => i.id} renderItem={renderProdutos}/>
        </>
    );
};
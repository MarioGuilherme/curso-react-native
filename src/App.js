import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import DigiteSeuNome from "./components/DigiteSeuNome";
// import ListaProdutoV2 from "./components/Produtos/ListaProdutoV2";
// import ListaProduto from "./components/Produtos/ListaProduto";
// import UsuarioLogado from "./components/UsuarioLogado";
// import Familia from "./components/Relacao/Familia";
// import Membro from "./components/Relacao/Membro";
// import ParImpar from "./components/ParImpar";
// import Diferenciar from "./components/Diferenciar";
// import ContadorV2 from "./components/Contador/ContadorV2";
// import Pai from "./components/Indireta/Pai";
// import Pai from "./components/Direta/Pai";
// import Contador from "./components/Contador";
// import Botao from "./components/Botao";
// import Titulo from "./components/Titulo";
// import Aleatorio from "./components/Aleatorio";
// import MinMax from "./components/MinMax";
// import CompPadrao, { Comp1, Comp2 } from "./components/Multi";
// import Primeiro from "./components/Primeiro";

export default () => (
    <SafeAreaView style={styles.App}>
        <DigiteSeuNome/>
        {/*
        <ListaProdutoV2/>
        <ListaProduto/>
        <UsuarioLogado usuario={{ nome: "Mário", email: "marioguilermedev@gmail.com" }}/>
        <UsuarioLogado usuario={{ nome: "Mário" }}/>
        <UsuarioLogado usuario={{ email: "marioguilermedev@gmail.com" }}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Carlos" sobrenome="Arruda"/>
        </Familia>
        <Familia>
            <Membro nome="Mário" sobrenome="Rodrigues"/>
            <Membro nome="Marcos" sobrenome="Rodrigues"/>
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar/>
        <ContadorV2/>
        <Pai/>
        <Pai/>
        <Contador inicial={100} passo={21}/>
        <Contador/>
        <Botao/>
        <Titulo primario="Cadastro de Produto" secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <MinMax min={3} max={30}/>
        <MinMax min={310} max={563}/>
        <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </SafeAreaView>
)

const styles = StyleSheet.create({
    App: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});
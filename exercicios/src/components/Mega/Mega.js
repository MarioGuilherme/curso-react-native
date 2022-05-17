import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";
import styles from "../styles";
import MegaNumero from "./MegaNumero";

export default class Mega extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qtdNum: props.qtdNum,
            nums: []
        };
    }

    alterarQntdNum = num => {
        this.setState({ qtdNum: +num });
    }

    gerarNumeroNaoRepetido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoRepetido(nums) : novo;
    }

    gerarNumeros = () => {
        const nums = Array(this.state.qtdNum).fill().reduce(n => [...n, this.gerarNumeroNaoRepetido(n)], []).sort((a, b) => a - b);
        this.setState({ nums: nums });
    }

    exibirNumeros = () => {
        const nums = this.state.nums;
        return nums.map(num => {
            return <MegaNumero key={num} num={num}/>
        });
    }

    render() {
        return (
            <>
                <Text style={styles.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput keyboardType="numeric" style={{borderBottomWidth: 1, padding: 0}} placeholder="Quantidade de Números" value={`${this.state.qtdNum}`} onChangeText={this.alterarQntdNum}/>
                <Button title="Gerar" onPress={this.gerarNumeros}/>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}
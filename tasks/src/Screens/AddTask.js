import React, { Component } from "react";
import {
    Platform,
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TextInput
} from "react-native";
import commonStyles from "../commonStyles";

import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

const initialState = { description: "", date: new Date, showDatePicker: false }

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            description: this.state.description,
            date: this.state.date
        };

        this.props.onSave && this.props.onSave(newTask);
        this.setState({ ...initialState });
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker value={this.state.date} onChange={(_, date) => this.setState({ date, showDatePicker: false })} mode="date"/>;

        const dateString = moment(this.state.date).format("ddd, D [de] MMMM [de] YYYY");

        if (Platform.OS == "android")
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            );

        return datePicker;
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType="slide">
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}/>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        Nova Tarefa
                    </Text>
                    <TextInput style={styles.input} placeholder="Informe a Descrição..." value={this.state.description} onChangeText={description => this.setState({ description })}/>
                    {this.getDatePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>
                                Salvar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}/>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    },
    container: {
        backgroundColor: "#FFF"
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: "center",
        padding: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 10,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#E3E3E3",
        borderRadius: 6
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 15
    }
});
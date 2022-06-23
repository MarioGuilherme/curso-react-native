import React, { Component } from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    Alert,
    TouchableOpacity,
    Platform
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

import todayImage from "../../assets/imgs/today.jpg";
import tomorrowImage from "../../assets/imgs/tomorrow.jpg";
import weekImage from "../../assets/imgs/week.jpg";
import monthImage from "../../assets/imgs/month.jpg";

import { server, showError } from "../commom";
import axios from "axios";
import moment from "moment"
import "moment/locale/pt-br"

import commonStyles from "../commonStyles";
import Task from "../Components/Task";
import AddTask from "./AddTask";

const initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}

export default class TaskList extends Component {
    state = {
        ...initialState
    };

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem("tasksState");
        const savedState = JSON.parse(stateString) || initialState;
        this.setState({
            showDoneTasks: savedState.showDoneTasks,
        }, this.filterTasks);

        this.loadTasks();
    }

    loadTasks = async () => {
        try {
            const maxDate = moment().add({ days: this.props.daysAhead }).format("YYYY-MM-DD 23:59:59");
            const response = await axios.get(`${server}/tasks?date=${maxDate}`);
            this.setState({ tasks: response.data }, this.filterTasks);
        } catch (error) {
            showError(error);
        }
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks);
    }

    filterTasks = () => {
        let visibleTasks = null;
        if (this.state.showDoneTasks)
            visibleTasks = [...this.state.tasks];
        else {
            const peding = task => task.doneAt == null;
            visibleTasks = this.state.tasks.filter(peding);
        }
        this.setState({ visibleTasks });
        AsyncStorage.setItem("tasksState", JSON.stringify({
            showDoneTasks: this.state.showDoneTasks,
        }));
    }

    onToggleTask = async taskId => {
        try {
            await axios.put(`${server}/tasks/${taskId}/toggle`);
            this.loadTasks();
        } catch (error) {
            showError(error);
        }
    }

    addTask = async newTask => {
        if (!newTask.description || !newTask.description.trim()) {
            Alert.alert("Dados Inválidos", "Descrição não informada!");
            return;
        }

        try {
            await axios.post(`${server}/tasks`, {
                description: newTask.description,
                estimateAt: newTask.date,
            });
            this.setState({ showAddTask: false }, this.loadTasks);
        } catch (error) {
            showError(error);
        }
    }

    deleteTask = async taskId => {
        try {
            await axios.delete(`${server}/tasks/${taskId}`);
            this.loadTasks();
        } catch (error) {
            showError(error);
        }
    }

    getImage = () => {
        switch (this.props.daysAhead) {
            case 0: return todayImage;
            case 1: return tomorrowImage;
            case 7: return weekImage;
            default: return monthImage;
        }
    }

    getColor = () => {
        switch (this.props.daysAhead) {
            case 0: return commonStyles.colors.today;
            case 1: return commonStyles.colors.tomorrow;
            case 7: return commonStyles.colors.week;
            default: return commonStyles.colors.month;
        }
    }

    render() {
        const today = moment().locale("pt-br").format("ddd, D [de] MMMM");

        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} onCancel={() => this.setState({ showAddTask: false })} onSave={this.addTask}/>
                <ImageBackground style={styles.background} source={this.getImage()}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name={"bars"} size={20} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? "eye" : "eye-slash"} size={20} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <Text style={styles.subtitle}>
                            {today}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleTasks} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <Task {...item} onToggleTask={this.onToggleTask} onDelete={this.deleteTask}/>}/>
                </View>
                <TouchableOpacity style={[styles.addButton, { backgroundColor: this.getColor() }]} activeOpacity={0.6} onPress={() => this.setState({ showAddTask: true })}>
                    <Icon name="plus" size={20} color={commonStyles.colors.secondary}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between",
        marginTop: Platform.OS == "ios" ? 40 : 10
    },
    addButton: {
        position: "absolute",
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
});
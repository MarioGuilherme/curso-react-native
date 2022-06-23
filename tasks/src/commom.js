import {
    Alert,
    Platform
} from "react-native";

const server = Platform.OS == "ios" ? "http://localhost:3000" : "http://192.168.1.111:3000";

function showError(error) {
    error.response && error.response.data
        ? Alert.alert("Ops! Ocorreu um Problema!", `Mensagem: ${error.response.data}`)
        : Alert.alert("Ops! Ocorreu um Problema!", `Mensagem: ${error}`);
}

function showSuccess(message) {
    Alert.alert("Sucesso!", message);
}

export { server, showError, showSuccess };
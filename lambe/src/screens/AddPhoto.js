import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

export default class AddPhoto extends Component {
    state = {
        image: null,
        comment: ""
    };

    pickImage = () => {
        launchImageLibrary({
            mediaType: "photo",
            includeBase64: true,
            maxHeight: 600,
            maxWidth: 800
        }, response => {
            if (!response.didCancel)
                this.setState({ image: { uri: response.assets[0].uri, base64: response.assets[0].base64 } });
        });
    }

    save = async () => {
        Alert.alert("Imagem adicionada", this.state.comment);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Compartilhe uma imagem
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image}/>
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>
                            Escolha a foto
                        </Text>
                    </TouchableOpacity>
                    <TextInput placeholder="Alguem comentário para a foto?" style={styles.input} value={this.state.comment} onChangeText={comment => this.setState({ comment })}/>
                    <TouchableOpacity onPress={this.save} style={styles.button}>
                        <Text style={styles.buttonText}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS == "ios" ? 30 : 10,
        fontWeight: "bold"
    },
    imageContainer: {
        width: "90%",
        height: Dimensions.get("window").width / 2,
        backgroundColor: "#EEE",
        marginTop: 10
    },
    image: {
        width: "100%",
        height: Dimensions.get("window").width / 2,
        resizeMode: "center"
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#4286F4"
    },
    buttonText: {
        fontSize: 20,
        color: "#FFF"
    },
    input: {
        marginTop: 20,
        width: "90%"
    }
});
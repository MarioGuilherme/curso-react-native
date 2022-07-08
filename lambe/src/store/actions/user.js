import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";
import axios from "axios";

const authBaseUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
const API_KEY = "";

export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    };
};

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    };
};

export const createUser = user => {
    return dispatch => axios.post(`${authBaseUrl}/signupNewUser?key=${API_KEY}`, {
        email: user.email,
        password: user.password,
        returnSecureToken: true
    })
    .catch(error => console.log(error))
    .then(response => {
        if (response.data.localId)
            axios.put(`/users/${response.data.localId}.json`, {
                name: user.name
            })
            .catch(error => console.log(error))
            .then(response => console.log("Usuário criado com sucesso"));
    });
}
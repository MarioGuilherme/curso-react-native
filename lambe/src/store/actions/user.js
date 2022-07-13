import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from "./actionTypes";
import axios from "axios";
import { setMessage } from "./message";

const authBaseUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
const API_KEY = "";

export const userLogged = user => {
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
    return dispatch => {
        dispatch(loadingUser());
        axios.post(`${authBaseUrl}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(() => dispatch(setMessage({
            title: "Error",
            text: "Ocorreu um erro inesperado!"
        })))
        .then(response => {
            if (response.data.localId)
                axios.put(`/users/${response.data.localId}.json`, {
                    name: user.name
                })
                .catch(() => dispatch(setMessage({
                    title: "Error",
                    text: "Ocorreu um erro inesperado!"
                })))
                .then(() => {
                    dispatch(login(user));
                });
        });
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    };
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    };
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser());
        axios.post(`${authBaseUrl}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(() => dispatch(setMessage({
            title: "Error",
            text: "Ocorreu um erro inesperado!"
        })))
        .then(response => {
            if (response.data.localId) {
                user.token = response.data.token;
                axios.get(`/users/${response.data.localId}.json`)
                .catch(() => dispatch(setMessage({
                    title: "Error",
                    text: "Ocorreu um erro inesperado!"
                })))
                .then(response => {
                    delete user.password;
                    user.name = response.data.name;
                    dispatch(userLogged(user));
                    dispatch(userLoaded());
                });
            }
        });
    }
}
import { ADD_POST, ADD_COMMENT } from "./actionTypes";
import axios from "axios";

export const addPost = post => {
    return dispatch => {
        axios.post("/posts.json", {...post})
            .catch(error => console.log(error))
            .then(response => console.log(response))
    }
    // return {
    //     type: ADD_POST,
    //     payload: post
    // };
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload: payload
    };
}
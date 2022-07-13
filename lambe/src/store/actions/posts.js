import {
    SET_POSTS,
    ADD_COMMENT,
    CREATING_POST,
    POST_CREATED
} from "./actionTypes";
import { setMessage } from "./message";
import axios from "axios";

export const addPost = post => {
    return (dispatch, getState) => {
        dispatch(creatingPost());
        axios({
            url: "uploadImage",
            baseURL: "https://us-central1-lambe-bedee.cloudfunctions.net/",
            method: "POST",
            data: {
                image: post.image.base64
            }
        })  
            .catch(() => dispatch(setMessage({
                title: "Error",
                text: "Ocorreu um erro inesperado!"
            })))
            .then(response => {
                post.image = response.data.imageUrl;
                axios.post(`/posts.json?auth=${getState().user.token}`, {...post})
                    .catch(() => dispatch(setMessage({
                        title: "Error",
                        text: "Ocorreu um erro inesperado!"
                    })))
                    .then(() => dispatch(setMessage({
                        title: "Sucesso",
                        text: "Post criado com sucesso!"
                    })));
            });
        axios.post("/posts.json", {...post})
            .catch(error => dispatch(setMessage({
                title: "Error",
                text: error
            })))
            .then(() => {
                dispatch(fetchPosts());
                dispatch(postCreated());
            });
    }
}

export const addComment = payload => {
    return (dispatch, getState) => {
        axios.get(`/posts/${payload.postId}.json`)
            .catch(() => dispatch(setMessage({
                title: "Error",
                text: "Ocorreu um erro inesperado!"
            })))
            .then(response => {
                const comments = response.data.comments || [];
                comments.push(payload.comment);
                axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
                    .catch(() => dispatch(setMessage({
                        title: "Error",
                        text: "Ocorreu um erro inesperado!"
                    })))
                    .then(() => {
                        dispatch(fetchPosts());
                    });
            });
    };
}

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    };
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get("/posts.json")
            .catch(() => dispatch(setMessage({
                title: "Error",
                text: "Ocorreu um erro inesperado!"
            })))
            .then(response => {
                const rawPosts = response.data;
                const posts = []
                for (let key in rawPosts)
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    });

                dispatch(setPosts(posts.reverse()));
            });
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    };
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    };
}
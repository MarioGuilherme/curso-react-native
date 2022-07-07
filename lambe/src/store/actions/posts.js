import { SET_POSTS, ADD_COMMENT } from "./actionTypes";
import axios from "axios";

export const addPost = post => {
    return dispatch => {
        axios({
            url: "uploadImage",
            baseURL: "https://us-central1-lambe-bedee.cloudfunctions.net/",
            method: "POST",
            data: {
                image: post.image.base64
            }
        })  .catch(error => console.log(error))
            .then(response => {
                post.image = response.data.imageUrl;
                axios.post("/posts.json", {...post})
                    .catch(error => console.log(error))
                    .then(response => console.log(response));
            });
        axios.post("/posts.json", {...post})
            .catch(error => console.log(error))
            .then(response => console.log(response));
    }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload: payload
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
            .catch(error => console.log(error))
            .then(response => {
                const rawPosts = response.data;
                const posts = []
                for (let key in rawPosts)
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    });

                dispatch(setPosts(posts));
            });
    }
}
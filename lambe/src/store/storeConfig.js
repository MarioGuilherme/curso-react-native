// import { combineReducers } from "redux";
// import { configureStore  } from "@reduxjs/toolkit"
import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user";
import postsReducer from "./reducers/posts";

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer
});

export default storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
};
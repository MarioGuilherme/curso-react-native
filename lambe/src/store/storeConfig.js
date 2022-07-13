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
import messageReducer from "./reducers/message";

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    message: messageReducer
});

export default storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
};
import { combineReducers } from "redux";
import { configureStore  } from "@reduxjs/toolkit"
import userReducer from "./reducers/user";

const reducers = combineReducers({
    user: userReducer
});

export default storeConfig = () => {
    return configureStore(reducers)
};
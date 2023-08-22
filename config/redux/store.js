import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/reducer/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export default store;
import { createStore } from "redux";
import reducers from "./redux-saga/reducers";
const store = createStore(reducers);
export default store;

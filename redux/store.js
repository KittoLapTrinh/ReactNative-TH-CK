import { createStore } from "redux";
import calculatorReducer from "./reducer";

var store = createStore(calculatorReducer)

export default store;
import {reducer} from "./reducer/reducerProject";
import {createStore} from "redux";

export const store=createStore(reducer);
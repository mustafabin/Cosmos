import { createStore } from "redux";
import reducers from "./reducers/index.js";

//create the store with the reducers and default state
export const store = createStore(reducers, {});

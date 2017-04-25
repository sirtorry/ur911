import {createStore,  applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware"
import reducer from "./components/reducers/reducer";

const store = createStore(
                reducer, 
                applyMiddleware(createLogger(), thunk, promise())
                );

export default store;
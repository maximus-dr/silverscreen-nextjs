import { combineReducers } from "redux";
import { documentReducer } from "./document";
import eventsReducer from "./events";



const rootReducer = combineReducers({
    events: eventsReducer,
    document: documentReducer
});

export default rootReducer;

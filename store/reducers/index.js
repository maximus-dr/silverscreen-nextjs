import { combineReducers } from "redux";
import { documentReducer } from "./document";
import eventsReducer from "./events";
import { filterReducer } from "./filters";



const rootReducer = combineReducers({
    document: documentReducer,
    events: eventsReducer,
    filters: filterReducer
});

export default rootReducer;

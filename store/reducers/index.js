import { combineReducers } from "redux";
import { documentReducer } from "./document";
import eventsReducer from "./events";
import { stylesReducer } from "./styles";


const rootReducer = combineReducers({
    events: eventsReducer,
    document: documentReducer,
    styles: stylesReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import { dataReducer } from "./data";
import { documentReducer } from "./document";
import { filterReducer } from "./filters";


const rootReducer = combineReducers({
    document: documentReducer,
    data: dataReducer,
    filters: filterReducer
});

export default rootReducer;

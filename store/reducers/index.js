import { combineReducers } from "redux";
import { dataReducer } from "./data";
import { documentReducer } from "./document";
import { filteredReducer } from "./filtered";
import { filterReducer } from "./filters";


const rootReducer = combineReducers({
    document: documentReducer,
    data: dataReducer,
    filters: filterReducer,
    filtered: filteredReducer
});

export default rootReducer;

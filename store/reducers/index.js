import { combineReducers } from "redux";
import { dataListReducer } from "./dataList";
import { documentReducer } from "./document";
import { filteredReducer } from "./filtered";
import { filterReducer } from "./filters";



const rootReducer = combineReducers({
    document: documentReducer,
    dataList: dataListReducer,
    filters: filterReducer,
    filtered: filteredReducer
});

export default rootReducer;

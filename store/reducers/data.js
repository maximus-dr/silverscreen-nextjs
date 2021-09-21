import { SET_DATA_LIST } from "../actions/data";


const dataReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_DATA_LIST:
            return {
                ...action.data
            }
        default:
            return state;
    }
}

export {
    dataReducer
}

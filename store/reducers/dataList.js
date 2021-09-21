import { SET_DATA_LIST } from "../actions/dataList";


const dataListReducer = (state = {}, action) => {
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
    dataListReducer
}

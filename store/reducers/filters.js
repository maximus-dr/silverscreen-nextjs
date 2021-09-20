import { CLEAR_FILTERS, SET_FILTER } from "../actions/filters";


const parseTagCategory = (tag) => {
    return tag.split(';')[0] + ';';
}

const parseTagValue = (tag) => {
    return tag.split(';')[1];
}


const filterReducer = (state = [], action) => {
    switch (action.type) {

        case SET_FILTER:
            if (state.includes(action.filter)) return [...state];
            const value = parseTagValue(action.filter);
            const category = parseTagCategory(action.filter);
            let newState = state.filter(item => !item.includes(category));

            if (value === 'all') {
                return newState;
            }

            return [...newState, action.filter];

        case CLEAR_FILTERS:
            return []

        default:
            return [...state]
    }
}


export {
    filterReducer
}

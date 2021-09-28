import { CLEAR_FILTERS, SET_FILTER, SET_FILTERS, SET_MULTIPLE_FILTER, UNSET_MULTIPLE_FILTER } from "../actions/filters";


const parseTagCategory = (tag) => {
    if (!tag) return null;
    return tag.split(';')[0] + ';';
}

const parseTagValue = (tag) => {
    if (!tag) return null;
    return tag.split(';')[1];
}

const filterReducer = (state = [], action) => {

    switch (action.type) {

        case SET_FILTER:
            const isMultiple = action.isMultiple;
            if (isMultiple) {
                if (state.includes(action.filter)) {
                    return [...state].filter(tag => tag !== action.filter);
                }
                else {
                    return [...state, action.filter];
                }
            }

            if (!isMultiple) {
                if (state.includes(action.filter)) return [...state];

                const value = parseTagValue(action.filter);
                const category = parseTagCategory(action.filter);
                let newState = state.filter(item => !item.includes(category));

                if (value === 'all') {
                    return newState;
                }
                return [...newState, action.filter];
            }

        case SET_FILTERS:
            return [...action.filters];

        case SET_MULTIPLE_FILTER:
            return [...state, action.filter];

        case UNSET_MULTIPLE_FILTER:
            return [...state].filter(tag => tag !== action.filter);

        case CLEAR_FILTERS:
            return []

        default:
            return [...state]
    }
}


export {
    filterReducer,
    parseTagValue,
    parseTagCategory
}

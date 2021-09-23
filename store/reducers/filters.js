import { CLEAR_FILTERS, SET_FILTER, SET_FILTERS, SET_MULTIPLE_FILTER, UNSET_MULTIPLE_FILTER } from "../actions/filters";


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

        case SET_FILTERS:
            const newFilters = [...state];

            action.filters.forEach(filter => {
                if (newFilters.includes(filter)) return;
                newFilters.push(filter);
            });
            return newFilters

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
    filterReducer
}

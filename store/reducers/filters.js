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
            let result;

            if (isMultiple) {
                if (state.includes(action.filter)) {
                    result = [...state].filter(tag => tag !== action.filter);
                    sessionStorage.setItem('filters', result);
                    return result;
                }
                else {
                    result = [...state, action.filter];
                    sessionStorage.setItem('filters', result);
                    return result;
                }
            }

            if (!isMultiple) {
                if (state.includes(action.filter)) {
                    result = [...state];
                    sessionStorage.setItem('filters', result);
                    return result;
                }

                const value = parseTagValue(action.filter);
                const category = parseTagCategory(action.filter);
                result = state.filter(item => !item.includes(category));

                if (value === 'all') {
                    sessionStorage.setItem('filters', result);
                    return result;
                }
                result = [...result, action.filter];
                sessionStorage.setItem('filters', result);
                return result;
            }

        case SET_FILTERS:
            return [...action.filters];

        case SET_MULTIPLE_FILTER:
            return [...state, action.filter];

        case UNSET_MULTIPLE_FILTER:
            return [...state].filter(tag => tag !== action.filter);

        case CLEAR_FILTERS:
            sessionStorage.removeItem('filters');
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

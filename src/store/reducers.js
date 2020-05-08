import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField: '',
    robots: {}
};

/**
 * Search Robots Reducer
 * @param state
 * @param action
 */
export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            };

        default:
            return state;
    }
}
import * as actionType from './constants';

const initialStateSearch = {
    searchField: ''
};

/**
 * Search Robots Reducer
 * @param state
 * @param action
 */
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case actionType.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            };
        default:
            return state;
    }
}


const initialStateRobots = {
    isPending: false,
    error: undefined,
    robots: []
};

/**
 *
 * @param state
 * @param action
 * @returns {{searchField: string, robots: {}}|{searchField: string, robots: *}}
 */
export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case actionType.REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            };

        case actionType.REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                error: undefined,
                isPending: false,
                robots: action.payload
            };

        case actionType.REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false
            };

        default:
            return state;

    }
}
import {CHANGE_SEARCH_FIELD} from './constants';

export const setSearchField = text => {
    console.log(`Action [${CHANGE_SEARCH_FIELD}] with: `, text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}
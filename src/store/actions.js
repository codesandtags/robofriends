import * as action from './constants';
import { url } from '../api/robots';

export const setSearchField = text => ({
    type: action.CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({
        type: action.REQUEST_ROBOTS_PENDING
    });

    fetch(url)
        .then(response => response.json())
        .then((users) => {
            dispatch({
                type: action.REQUEST_ROBOTS_SUCCESS,
                payload: users
            });
        })
        .catch((error) => {
            dispatch({
                type: action.REQUEST_ROBOTS_FAILED,
                payload: error
            })
        });
}
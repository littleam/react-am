import * as types from '../constants/ActionTypes'

export const requestLists = () => {
    return {
        type:types.REQUEST_GET
    }
};
export const receiveLists = (json) => {
    return {
        type:types.RECEIVE_GET,
        lists:json
    }
};
export const fetchGet = () => {
    return dispatch => {
        dispatch(requestLists());
        return fetch('/api/lists')
            .then((response) => response.json())
            .then((json) => {
            dispatch(receiveLists(json));
        })
            .catch((error) => {console.error(error)});
    };
};

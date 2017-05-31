import { REQUEST_GET, RECEIVE_GET} from '../constants/ActionTypes'

export const FetchGetList = (state={}, action) => {
    switch (action.type) {
        case REQUEST_GET:
            return {
                ...state,
                isFetching:true
            };
        case RECEIVE_GET:
            return {
                ...state,
                isFetching:false,
                lists:action.lists
            };
        default:
            return state
    }
};

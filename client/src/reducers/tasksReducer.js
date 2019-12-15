import { FETCH_TASKS } from '../actions/types';


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        default:
            return state;
    }
}

import { FETCH_USER } from '../actions/types';
const lodash = require('lodash');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                isAuthenticated: !lodash.isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}

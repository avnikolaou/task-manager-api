import { OPEN_MODAL } from '../actions/types';

const intialState = {
    openModal: false
};

export default function (state = intialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                openModal: action.payload
            };
        default:
            return state;
    }
}

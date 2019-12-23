import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tasksReducer from './tasksReducer'
import modalReducer from './modalReducer';

export default combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    modal: modalReducer
})

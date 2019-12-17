import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {FETCH_TASKS, FETCH_USER, OPEN_MODAL} from './types';

export const loginUser = (userData) => async dispatch => {
    const res = await axios.post('api/users/login', userData);
    // Set token to localStorage
    const token  =  res.data.token;
    localStorage.setItem('jwtToken', token);
    // Set token to Auth header
    setAuthToken(token);

    dispatch({ type: FETCH_USER, payload: res.data.user })
};

export const registerUser = (userData) => async dispatch => {
    const res = await axios.post('api/users', userData);
    // Set token to localStorage
    const token  =  res.data.token;
    localStorage.setItem('jwtToken', token);
    // Set token to Auth header
    setAuthToken(token);

    dispatch({ type: FETCH_USER, payload: res.data.user })
};

export const fetchCurrentUser = (userId) => async dispatch => {
    const res = await axios.get(`api/users/${userId}`);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const logoutUser = () => async dispatch => {
    const res = await axios.post('api/users/logout');
    if (res.status === 200) {
        // Remove token from local storage
        localStorage.removeItem("jwtToken");
        // Remove auth header for future requests
        setAuthToken(false);
        // Set current user to empty object {} which will set isAuthenticated to false

        dispatch({ type: FETCH_USER, payload:{} });
    }
};

export const getTasks = () => async dispatch => {
    const res = await axios.get('api/tasks');
    dispatch({ type: FETCH_TASKS, payload: res.data });
};

export const deleteTask = (taskId) => async dispatch => {
    await axios.delete(`api/tasks/${taskId}`);
    const res = await axios.get('api/tasks');
    dispatch({ type: FETCH_TASKS, payload: res.data })
};

export const updateTask = (taskId, completed) => async dispatch => {
    await axios.patch(`api/tasks/${taskId}`, completed);
    const res = await axios.get('api/tasks');
    dispatch({ type: FETCH_TASKS, payload: res.data })
};

export const openModal = () => dispatch => {
    dispatch({ type: OPEN_MODAL, payload: true });
};

export const closeModal = () => dispatch => {
    dispatch({ type: OPEN_MODAL, payload: false });
};

export const addTask = (userData) => async dispatch => {
    await axios.post('api/tasks', userData);
    const res = await axios.get('api/tasks');
    dispatch({ type: FETCH_TASKS, payload: res.data });
    dispatch({ type: OPEN_MODAL, payload: false });
};

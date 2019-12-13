import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {FETCH_USER, USER_LOADING} from './types';

export const loginUser = userData => async dispatch => {
    const res = await axios.post('api/users/login', userData);
    // Set token to localStorage
    const token  =  res.data.token;
    localStorage.setItem('jwtToken', token);
    // Set token to Auth header
    setAuthToken(token);

    dispatch({ type: FETCH_USER, payload: res.data.user })
};

export const fetchUser = () => async dispatch => {
    const res = await axios.get('api/users/me');
    console.log('ACTION FETCH USER: ' + res.data.user);
    dispatch({ type: FETCH_USER, payload: res.data.user });
};

export const fetchCurrentUser = (userId) => async dispatch => {
    const res = await axios.get(`api/users/${userId}`);
    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch({ type: USER_LOADING, payload: true });
};

export const logoutUser = () => async dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false

    dispatch({ type: FETCH_USER, payload:{} });
};

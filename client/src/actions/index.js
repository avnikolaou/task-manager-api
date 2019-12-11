import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { FETCH_USER, CURRENT_USER } from './types';

export const fetchUser = () => async dispatch => {
    // const res = axios.get('/api/users/me');
    // dispatch({ type: FETCH_USER, payload: res })
};

export const loginUser = (userdata) =>  async dispatch => {
    const res = await axios.post('/api/users/login', userdata);

    // Set token to localStorage
    const { token } = res.data.token;
    localStorage.setItem("jwtToken", token);

    // Set token to Auth header
    setAuthToken(token);

    // Decode token to get user data
    const decoded = jwt_decode(token);

    // Set current user
    // dispatch(setCurrentUser(decoded));
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: CURRENT_USER,
        payload: decoded
    };
};

import React, { Component } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode'
import { fetchCurrentUser, loginUser, fetchUser, logoutUser } from "../actions";
import '../App.css';

import Header from './Header';
import Login from './Login';
import Landing from './Landing';
import Tasks from './Tasks';


if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    const decodedToken = jwt_decode(token);
    const userId = decodedToken._id;
    fetchCurrentUser(userId);

    const currentTime = Date.now() / 1000;

    if (token.exp < currentTime) {
        logoutUser();
    }
}

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route exact path={'/'} component={Landing}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/tasks'} component={Tasks}/>
                </BrowserRouter>
            </div>
        );
    }
}

App.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.authentication
});

export default connect(mapStateToProps, { fetchCurrentUser, loginUser, fetchUser, logoutUser })(App);

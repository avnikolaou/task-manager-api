import React, { Component } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode'
import { fetchCurrentUser, logoutUser, getTasks } from "../actions";
import setAuthToken from "../utils/setAuthToken";
import '../App.css';

import Header from './Header';
import Login from './Login';
import Landing from './Landing';
import Tasks from './Tasks';


class App extends Component {

    componentDidMount() {
        if (localStorage.jwtToken) {
            // Set auth token header auth
            const token = localStorage.jwtToken;
            setAuthToken(token);
            // Decode token and get user id
            const decodedToken = jwt_decode(token);
            const userId = decodedToken._id;
            this.props.fetchCurrentUser(userId);
            this.props.getTasks();

            const currentTime = Date.now() / 1000; // to get in milliseconds
            if (decodedToken.exp < currentTime) {
                console.log(decodedToken.exp < currentTime);
                // Logout user
                this.props.logoutUser();

                // Claer token
                localStorage.removeItem("jwtToken");

                // Redirect to login
                window.location.href = "./login";
            }
        }
    }

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
    auth: state.auth
});

export default connect(mapStateToProps, { fetchCurrentUser, logoutUser, getTasks })(App);

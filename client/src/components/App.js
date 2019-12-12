import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, loginUser} from "../actions";
import '../App.css';

import Header from './Header';
import Login from './Login';
import Landing from './Landing';
import Tasks from './Tasks';

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

export default connect(null, { fetchUser, loginUser })(App);

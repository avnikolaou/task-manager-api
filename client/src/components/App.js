import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';

import Header from './Header';
import Login from './Login';
import Landing from './Landing';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route exact path={'/'} component={Landing}/>
                    <Route exact path={'/login'} component={Login}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

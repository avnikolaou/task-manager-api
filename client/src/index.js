import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Redux
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';

import combinereducers from './reducers';


const store = createStore(combinereducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root'));

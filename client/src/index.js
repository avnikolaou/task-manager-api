import React from 'react';
import ReactDom from 'react-dom';


// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from './components/App'

// Create a new instance of the redux store
const store = createStore(applyMiddleware(reduxThunk));

ReactDom.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

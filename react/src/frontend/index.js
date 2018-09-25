import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './redux/reducers/index';
import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
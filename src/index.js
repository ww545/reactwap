import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import reducers from '../src/reducers/index'
import App from './App';

import './index.css';
import './utils/interceptor'


const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
ReactDOM.render(
    (<Provider store={store}>

        <BrowserRouter  >
             <App />
        </BrowserRouter >

    </Provider>) ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

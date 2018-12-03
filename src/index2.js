import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react'

import * as serviceWorker from './serviceWorker';

import App from './App';
import Reducer from './reducers/index'
import './index.css';
import './utils/interceptor'

const store = createStore(Reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():fn=>fn
));
ReactDOM.render(
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
             <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>) ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

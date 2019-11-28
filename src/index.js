import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './redux/store';
import { Provider } from 'react-redux';
import {ToastContainer} from "react-toastify";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

import { configureMockBackEnd } from './helper/mockBackEnd';

configureMockBackEnd();

ReactDOM.render((
    <Provider store={store}>
        <ToastContainer position={'top-center'} />
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    ),
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

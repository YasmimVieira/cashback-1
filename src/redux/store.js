import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();
const loggerMiddleware = createLogger();

const store = createStore(
    createRootReducer(history),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routerMiddleware(history)
    )
);

export default store;


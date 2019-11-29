import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
// import toastMiddleware from './middleware/toastMiddleware';

export const history = createBrowserHistory();
const loggerMiddleware = createLogger();

const store = createStore(
    createRootReducer(history),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        // toastMiddleware,
        routerMiddleware(history)
    )
);

export default store;


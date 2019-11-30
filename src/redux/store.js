import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import toastMiddleware from './middleware/toastMiddleware';

export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    applyMiddleware(
        thunkMiddleware,
        toastMiddleware,
        routerMiddleware(history)
    )
);

export default store;


import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import usuarioReducer from './cadastroReducer';
import loginReducer from './loginReducer';

export default history => combineReducers({
    usuarioReducer,
    loginReducer,
    router: connectRouter(history)
});
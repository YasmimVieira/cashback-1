import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cadastroReducer from './cadastroReducer';
import loginReducer from './loginReducer';

export default history => combineReducers({
    cadastroReducer,
    loginReducer,
    router: connectRouter(history)
});
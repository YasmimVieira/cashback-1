import { combineReducers } from 'redux';
import novoUsuarioReducer from '../reducers/novoUsuarioReducer';

const reducers  = combineReducers({
    novoUsuario: novoUsuarioReducer
})

export default reducers;
import { constUsuario } from '../../constants/constUsuarios';

let usuario = JSON.parse(localStorage.getItem('usuario'));

const INITIAL_STATE = usuario ? { loggedIn: true, usuario } : {};

export default function authentication(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constUsuario.LOGIN_REQUEST: return { loggingIn: true, usuario: action.usuario };
    case constUsuario.LOGIN_SUCCESSO: return { loggedIn: true, usuario: action.usuario };
    case constUsuario.LOGIN_ERRO: return {};
    case constUsuario.LOGOUT: return {};
    default: return state;
  }
}
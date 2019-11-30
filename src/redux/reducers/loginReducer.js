import USUARIO from '../../constants/usuarios';

let usuario = JSON.parse(localStorage.getItem('usuario'));

const INITIAL_STATE = usuario ? { loggedIn: true, usuario } : { loggingIn: false};

export default function autenticacao(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USUARIO.LOGIN_REQUEST: return { loggingIn: true, usuario: action.usuario };
    case USUARIO.LOGIN_SUCESSO: return { loggedIn: true, usuario: action.usuario };
    case USUARIO.LOGIN_ERRO: return {};
    case USUARIO.LOGOUT: return {};
    default: return state;
  }
}
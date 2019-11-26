import { constUsuario } from '../../constants/constUsuarios';

const INITIAL_STATE = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    confirmaSenha: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case constUsuario.CADASTRO_NOME: return {...state, nome: action.info};
        case constUsuario.CADASTRO_CPF: return {...state, cpf: action.info};
        case constUsuario.CADASTRO_EMAIL: return {...state, email: action.info};
        case constUsuario.CADASTRO_SENHA: return {...state, senha: action.info};
        case constUsuario.VALIDAR_SENHA: return {...state, confirmaSenha: action.info};
        case constUsuario.CADASTRAR_USUARIO_REQUEST: return {registering: true};
        case constUsuario.CADASTRAR_USUARIO_SUCCESSO: return {};
        case constUsuario.CADASTRAR_USUARIO_ERRO: return {};
        default: return state;
    }
}
/* eslint-disable no-restricted-globals */
import { constUsuario } from '../../constants/constUsuarios';
import { actionMsg } from './actionMensagem';
import { usuarioServer } from '../../service/usuarioServer';

export const cadastroNome = event => {
    return {
        type: 'CADASTRO_NOME',
        info: event.target.value
    }
}

export const cadastroCPF = event => {
    return {
        type: constUsuario.CADASTRO_CPF,
        info: event.target.value
    }
}

export const cadastroEmail = event => {
    return {
        type: constUsuario.CADASTRO_EMAIL,
        info: event.target.value
    }
}

export const cadastroSenha = event => {
    return {
        type: constUsuario.CADASTRO_SENHA,
        info: event.target.value
    }
}

export const validarSenha = event => {
    return {
        type: constUsuario.VALIDAR_SENHA,
        info: event.target.value
    }
}

export function login(usuario, senha) {
    return dispatch => {
        dispatch(request({ usuario }));

        usuarioServer.login(usuario, senha)
            .then(
                usuario => { 
                    dispatch(successo(usuario));
                    history.push('/');
                },
                error => {
                    dispatch(erro(error.toString()));
                    dispatch(actionMsg.erro(error.toString()));
                }
            );
    };

    function request(usuario) { return { type: constUsuario.LOGIN_REQUEST, usuario } }
    function successo(usuario) { return { type: constUsuario.LOGIN_SUCCESSO, usuario } }
    function erro(error) { return { type: constUsuario.LOGIN_ERRO, error } }
}

export function logout() {
    usuarioServer.logout();
    return { type: constUsuario.LOGOUT };
}

export function cadastrarUsuario(usuario) {
    return dispatch => {
        dispatch(request(usuario));

        usuarioServer.register(usuario)
            .then(
                usuario => { 
                    dispatch(successo());
                    history.push('/login');
                    dispatch(actionMsg.successo('Usuário cadastrado com sucesso!'));
                },
                error => {
                    dispatch(erro(error.toString()));
                    dispatch(actionMsg.erro(error.toString()));
                }
            );
    };

    function request(usuario) { return { type: constUsuario.CADASTRAR_REQUEST, usuario } }
    function successo(usuario) { return { type: constUsuario.CADASTRAR_SUCESSO, usuario } }
    function erro(error) { return { type: constUsuario.CADASTRAR_ERRO, error } }
}
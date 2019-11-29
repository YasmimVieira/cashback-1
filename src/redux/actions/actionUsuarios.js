/* eslint-disable no-restricted-globals */
import USUARIO from '../../constants';
import { usuarioServer } from '../../service/usuarioServer';
import { history } from '../store';
// import { buildToast, ToastTypes } from '../../helper/toastify';

export function cadastrarUsuario(usuario) {
    return dispatch => {
        dispatch({ type: USUARIO.CADASTRAR_REQUEST, usuario });

        usuarioServer.register(usuario)
            .then(
                usuario => { 
                    dispatch({ type: USUARIO.CADASTRAR_SUCESSO, usuario });
                    history.push('/');
                    // dispatch({type: 'TOASTY_SUCESSO', 
                    //     toast: buildToast('Cadastro concluído com sucesso!', 
                    //     {type: ToastTypes.SUCCESS})
                    // })
                },
                error => {
                    dispatch({ type: USUARIO.CADASTRAR_ERRO, error });
                //     dispatch({ type: 'TOASTY_ERRO', 
                //     toast: buildToast('Não foi possível completar o seu cadastro',
                //      {type: ToastTypes.ERROR})
                // });
                }
            );
    };
}

export function login(email, senha) {
    return dispatch => {
        dispatch({ type: USUARIO.LOGIN_REQUEST, email });

        usuarioServer.login(email, senha)
            .then(
                usuario => { 
                    dispatch({ type: USUARIO.LOGIN_SUCESSO, usuario });
                    history.push('/home');
                },
                error => {
                    dispatch({ type: USUARIO.LOGIN_ERRO, error });
                    // dispatch({ type: 'TOASTY_ERRO', toast: buildToast(
                    //     'Email ou senha incorreta. Digite novamente',
                    //      {type: ToastTypes.ERROR})
                    // });
                    console.error(error);
                }
            );
    };
}

export function logout() {
    usuarioServer.logout();
    return { type: USUARIO.LOGOUT };
}
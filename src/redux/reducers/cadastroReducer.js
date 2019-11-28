import USUARIO from '../../constants';

export default function registrar (state = {}, action) {
    switch(action.type) {
        case USUARIO.CADASTRAR_REQUEST: return {registering: true};
        case USUARIO.CADASTRAR_SUCESSO: return {};
        case USUARIO.CADASTRAR_ERRO: return {};
        default: return state;

        
    }
}
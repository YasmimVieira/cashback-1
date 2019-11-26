import { constMensagens } from '../../constants/constMensagens';

export function alerta(state = {}, action) {
  switch (action.type) {
    case constMensagens.SUCCESSO:
      return {
        type: 'alert-success',
        msg: action.msg
      };
    case constMensagens.ERRO:
      return {
        type: 'alert-danger',
        message: action.msg
      };
    case constMensagens.LIMPAR:
      return {};
    default:
      return state
  }
}
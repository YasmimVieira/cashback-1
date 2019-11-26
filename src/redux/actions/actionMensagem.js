import { constMensagens } from '../../constantes/constMensagens';

export const actionMsg = {
    successo,
    erro,
    limpar
};

function successo(msg) {
    return { type: constMensagens.SUCCESSO, msg };
}

function erro(msg) {
    return { type: constMensagens.ERRO, msg };
}

function limpar() {
    return { type: constMensagens.LIMPAR };
}
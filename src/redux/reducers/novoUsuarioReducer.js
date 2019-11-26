const INITIAL_STATE = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    confirmaSenha: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CADASTRO_NOME': return {...state, nome: action.info}
        case 'CADASTRO_CPF': return {...state, cpf: action.info}
        case 'CADASTRO_EMAIL': return {...state, email: action.info}
        case 'CADASTRO_SENHA': return {...state, senha: action.info}
        case 'VALIDAR_SENHA': return {...state, confirmaSenha: action.info}
        default: return state
    }
}
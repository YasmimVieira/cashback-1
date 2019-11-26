export const cadastroNome = event => {
    return {
        type: 'CADASTRO_NOME',
        info: event.target.value
    }
}

export const cadastroCPF = event => {
    return {
        type: 'CADASTRO_CPF',
        info: event.target.value
    }
}

export const cadastroEmail = event => {
    return {
        type: 'CADASTRO_EMAIL',
        info: event.target.value
    }
}

export const cadastroSenha = event => {
    return {
        type: 'CADASTRO_SENHA',
        info: event.target.value
    }
}

export const validarSenha = event => {
    return {
        type: 'VALIDAR_SENHA',
        info: event.target.value
    }
}

// export const addContato = (data, nome, email, assunto) => {
//     axios.post(URL, {data, nome, email, assunto})
//     return {
//         type: 'LIMPAR_FORM'
//     }
// }
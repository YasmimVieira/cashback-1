let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
export function configureMockBackEnd() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // autenticação
                if (url.endsWith('/usuarios/autenticar') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);
                    // find if any user matches login credentials
                    let filtroUsuarios = usuarios.filter(usuario => {
                        return usuario.email === params.email && usuario.senha === params.senha;
                    });
                    if (filtroUsuarios.length) {
                        // if login details are valid return user details and fake jwt token
                        let usuario = filtroUsuarios[0];
                        let responseJson = {
                            id: usuario.id,
                            nome: usuario.nome,
                            cpf: usuario.cpf,
                            email: usuario.email,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Usuário ou senha incorreta');
                    }
                    return;
                }

                // Registrar usuário
                if (url.endsWith('/usuarios/cadastrar') && opts.method === 'POST') {
                    let novoUsuario = JSON.parse(opts.body);
                    let usuarioDuplicado = usuarios.filter(usuario => { return usuario.email === novoUsuario.email; }).length;
                    if (usuarioDuplicado) {
                        reject('O email "' + usuarioDuplicado.email + '" já está cadastrado');
                        return;
                    }
                    // Salvar novo usuário
                    novoUsuario.id = usuarios.length ? Math.max(...usuarios.map(usuario => usuario.id)) + 1 : 1;
                    usuarios.push(novoUsuario);
                    localStorage.setItem('usuarios', JSON.stringify(usuarios));
                    resolve({ ok: true, text: () => Promise.resolve() });
                    return;
                }

                // Erro para qualquer outra requisição não descrita
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
import config from 'config';

export const usuarioServer = {
    login,
    logout,
    register,
};

function login(email, senha) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    };

    return fetch(`${config.apiUrl}/usuarios/autenticar`, requestOptions)
        .then(handleResponse)
        .then(usuario => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('usuario', JSON.stringify(usuario));

            return usuario;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('usuario');
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

function register(usuario) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    };

    return fetch(`${config.apiUrl}/usuarios/cadastrar`, requestOptions).then(handleResponse);
}

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
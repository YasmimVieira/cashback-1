import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './paginas/Login/Login';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import Home from './paginas/Home/Home';

export default () => (
<Switch>
    <Route path='/login' component={Login} />
    <Route path='/cadastro' component={CadastroUsuario} />
    <Route path='*' component={Home} />
</Switch>
)
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import Home from './pages/Home/Home';

export default () => (
<Switch>
    <Route path='/login' component={Login} />
    <Route path='/cadastro' component={CadastroUsuario} />
    <Route path='*' component={Home} />
</Switch>
)
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import Home from './pages/Home/Home';

export default () => (
<Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/cadastro' component={CadastroUsuario} />
    <Redirect from="*" to="/" />
</Switch>
)
import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

import logo from '../imagens/logo.png';

export default () => {
    return (
      <div>
            <Navbar light expand="md">
            <NavbarBrand href="/">
                <img className="ml-4 pt-2" src={logo} alt="logo" />
            </NavbarBrand>
            </Navbar>
        </div>
    )
}
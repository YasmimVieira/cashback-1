import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ImagemLogin from '../../imagens/login.svg';

import './Login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <Row className="container-login">
                    <Col xl="4" className="col-img">
                        <img className="imagem-login" src={ImagemLogin} alt="imagem login" />
                    </Col>
                    <Col xl="4" id="col-form">
                        <Row className="title text-center mb-3">
                            <h2>Cashback Boticário</h2>
                        </Row>
                        <Row className="title text-center mb-3">
                            <h4>Bem-vindo! Acesse sua conta</h4>
                        </Row>
                        <Form>
                            <FormGroup className="mb-3">
                                <Label for="email">Email</Label>
                                <Input type="email" id="email" placeholder="seuemail@email.com" />
                            </FormGroup>
                            <FormGroup className="mb-5">
                                <Label for="senha">Senha</Label>
                                <Input type="password" id="senha" placeholder="Digite sua senha" />
                            </FormGroup>
                            <Button className="mb-3" color="success" size="large" block>Entrar</Button>
                        </Form>
                        <p className="text-center">Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Login;
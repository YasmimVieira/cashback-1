import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './CadastroUsuario.css';

class CadastroUsuario extends Component {
    render() {
        return (
            <div className="grid-cadastro">
                <Col xl="6" id="col-cadastro">
                    <Row className="text-center mb-3">
                        <h2 className="title">Crie sua conta</h2>
                    </Row>
                    <Form>
                        <FormGroup className="mb-3">
                            <Label for="email">Nome</Label>
                            <Input type="text" id="nome" placeholder="Nome completo" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label for="email">CPF</Label>
                            <Input type="text" id="cpf" placeholder="CPF" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label for="email">Email</Label>
                            <Input type="email" id="email" placeholder="seuemail@email.com" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label for="senha">Senha</Label>
                            <Input type="password" id="senha" placeholder="Digite sua senha" />
                        </FormGroup>
                        <FormGroup className="mb-5">
                            <Label for="senha">Confirme sua senha</Label>
                            <Input type="password" placeholder="Digite sua senha novamente" />
                        </FormGroup>
                        <Button className="mb-3" color="success" size="large" block>Cadastrar</Button>
                    </Form>
                    <p className="text-center">Já tem conta? <Link to="/login">Faça login</Link></p>
                </Col>
            </div>
        )
    }
}

export default CadastroUsuario;
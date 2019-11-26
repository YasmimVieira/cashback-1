import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import * as NovoUsuarioActions from "../../redux/actions/cadastroUsuario";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './CadastroUsuario.css';

class CadastroUsuario extends Component {
    
    render() {
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return (
            <div className="grid-cadastro">
                <Col xl="6" id="col-cadastro">
                    <Row className="text-center mb-3">
                        <h2 className="title">Crie sua conta</h2>
                    </Row>
                    <Form>
                        <FormGroup className="mb-3">
                            <Label>Nome</Label>
                            <Input type="text" id="nome" 
                                placeholder="Nome completo" 
                                value={this.props.nome}
                                invalid={this.props.nome.trim() === '' || this.props.nome.length < 10}
                                onChange={this.props.cadastroNome}
                            />
                            <FormFeedback>Campo obrigatório. Digite seu nome completo</FormFeedback>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label>CPF</Label>
                            <Input type="text" id="cpf" 
                                placeholder="CPF" 
                                value={this.props.cpf}
                                invalid={this.props.cpf !== regexCPF.test(this.props.cpf)}
                                onChange={this.props.cadastroCPF}
                            />
                            <FormFeedback>CPF inválido</FormFeedback>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label>Email</Label>
                            <Input type="email" id="email" 
                                placeholder="seuemail@email.com" 
                                value={this.props.email}
                                invalid={this.props.email !== regexEmail.test(this.props.email)}
                                onChange={this.props.cadastroEmail}
                            />
                            <FormFeedback>Email inválido</FormFeedback>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label>Senha</Label>
                            <Input type="password" id="senha" 
                                placeholder="Digite sua senha" 
                                value={this.props.senha}
                                onChange={this.props.cadastroSenha}
                                invalid={this.props.senha.length < 8}
                            />
                            <FormFeedback>A senha precisa ter no mínimo 8 caracteres</FormFeedback>
                        </FormGroup>
                        <FormGroup className="mb-5">
                            <Label>Confirme sua senha</Label>
                            <Input type="password" id="confirmaSenha"
                                placeholder="Digite sua senha novamente" 
                                value={this.props.confirmaSenha}
                                invalid={this.props.senha !== this.props.confirmaSenha}
                                onChange={this.props.validarSenha}
                            />
                            <FormFeedback>A senha precisa ser a mesma do campo anterior</FormFeedback>
                        </FormGroup>
                        <Button className="mb-3" color="success" size="large" type="submit" block>Cadastrar</Button>
                    </Form>
                    <p className="text-center">Já tem conta? <Link to="/login">Faça login</Link></p>
                </Col>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    nome: state.novoUsuario.nome,
    cpf: state.novoUsuario.cpf,
    email: state.novoUsuario.email,
    senha: state.novoUsuario.senha,
    confirmaSenha: state.novoUsuario.confirmaSenha
})

const mapDispatchToProps = dispatch => bindActionCreators(NovoUsuarioActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroUsuario)
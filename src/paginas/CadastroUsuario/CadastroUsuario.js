import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import * as NovoUsuarioActions from "../../redux/actions/actionUsuarios";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './CadastroUsuario.css';
class CadastroUsuario extends Component {
    
    render() {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return (
            <div className="grid-cadastro">
                <Col xl="6" id="col-cadastro">
                    <Row className="text-center mb-3">
                        <h2 className="title">Crie sua conta</h2>
                    </Row>
                        <AvForm>
                            <AvField name="nome" label="Nome" type="text"
                                placeholder="Nome completo"
                                value={this.props.nome}
                                onChange={this.props.cadastroNome}
                                validate={{ required: {value: true, errorMessage: 'Digite seu nome completo'},
                                    minLength: {value: 10, errorMessage: 'Digite seu nome completo'},
                                }}
                            />
                            <AvField name="cpf" label="CPF" type="text"
                                placeholder="123.456.789-10"
                                value={this.props.cpf}
                                onChange={this.props.cadastroCPF}
                                validate={{ required: {value: true, errorMessage: 'CPF inválido'},
                                    pattern: {value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, errorMessage: 'CPF inválido'},
                                }}
                            />
                            <AvField name="email" label="Email" type="email"
                                placeholder="seuemail@email.com" 
                                value={this.props.email}
                                onChange={this.props.cadastroEmail}
                                validate={{ required: {value: true, errorMessage: 'Email inválido'},
                                    pattern: {value: regexEmail, errorMessage: 'Email inválido'},
                                }}
                            />
                            <AvField name="senha" label="Senha" type="password"
                                placeholder="Digite sua senha" 
                                value={this.props.senha}
                                onChange={this.props.cadastroSenha}
                                validate={{ required: {value: true, errorMessage: 'Necessário no mínimo 8 caracteres'},
                                    minLength: {value: 8, errorMessage: 'Necessário no mínimo 8 caracteres'},
                                }}
                            />
                            <AvField name="confirmaSenha" label="Confirme sua senha" type="password"
                                placeholder="Digite sua senha novamente" 
                                value={this.props.confirmaSenha}
                                onChange={this.props.validarSenha}
                                validate={{ required: {value: true, errorMessage: 'Mesma senha do campo anterior'},
                                    minLength: {value: 8, errorMessage: 'Mesma senha do campo anterior'},
                                }}
                            />
                        <Button className="mt-4 mb-3" color="success" size="large" type="submit" block>
                            Cadastrar
                        </Button>
                        </AvForm>
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
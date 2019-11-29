/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import * as actionUsuarios from "../../redux/actions/actionUsuarios";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './CadastroUsuario.css';
class CadastroUsuario extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: {
                nome: '',
                cpf: '',
                email: '',
                senha: '',
            },
            confirmaSenha: '',
            enviado: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { usuario } = this.state;
        this.setState({
            usuario: {
                ...usuario,
                [name]: value
            }
        });
    }

    // validaForm() {
    //     return this.state.nome !== '' &&
    //     this.state.cpf !== '' &&
    //     this.state.email !== '' &&
    //     this.state.senha !== '' &&
    //     this.state.confirmaSenha !== '';
    // }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({ enviado: true });
        const { usuario } = this.state;
        if (usuario.nome && usuario.cpf && usuario.email && usuario.senha) {
            this.props.cadastrarUsuario(usuario);
        }    
    }

    render() {
        const { registering } = this.props.cadastroReducer;
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
                                value={this.state.usuario.nome}
                                onChange={this.handleChange}
                                validate={{ required: {value: true, errorMessage: 'Digite seu nome completo'},
                                    minLength: {value: 10, errorMessage: 'Digite seu nome completo'},
                                }}
                            />
                            <AvField name="cpf" label="CPF" type="text"
                                placeholder="123.456.789-10"
                                value={this.state.usuario.cpf}
                                onChange={this.handleChange}
                                validate={{ required: {value: true, errorMessage: 'CPF inválido'},
                                    pattern: {value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, errorMessage: 'CPF inválido'},
                                }}
                            />
                            <AvField name="email" label="Email" type="email"
                                placeholder="seuemail@email.com" 
                                value={this.state.usuario.email}
                                onChange={this.handleChange}
                                validate={{ required: {value: true, errorMessage: 'Email inválido'},
                                    pattern: {value: regexEmail, errorMessage: 'Email inválido'},
                                }}
                            />
                            <AvField name="senha" label="Senha" type="password"
                                placeholder="Digite sua senha" 
                                value={this.state.usuario.senha}
                                onChange={this.handleChange}
                                validate={{ required: {value: true, errorMessage: 'Necessário no mínimo 8 caracteres'},
                                    minLength: {value: 8, errorMessage: 'Necessário no mínimo 8 caracteres'},
                                }}
                            />
                            <AvField name="confirmaSenha" label="Confirme sua senha" type="password"
                                placeholder="Digite sua senha novamente" 
                                value={this.state.confirmaSenha}
                                onChange={this.handleChange}
                                validate={{ required: {value: true, errorMessage: 'Mesma senha do campo anterior'},
                                    minLength: {value: 8, errorMessage: 'Mesma senha do campo anterior'},
                                }}
                            />
                        <Button disabled={this.state.usuario === '' ? true : false}
                            className="mt-4 mb-3" color="success" size="large" 
                            type="submit" block
                            onClick={this.handleSubmit}
                            >
                            Cadastrar
                        </Button>
                        { registering }
                        </AvForm>
                    <p className="text-center">Já tem conta? <Link to="/login">Faça login</Link></p>
                </Col>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cadastroReducer: state.cadastroReducer
})

const mapDispatchToProps = dispatch => bindActionCreators(actionUsuarios, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroUsuario)
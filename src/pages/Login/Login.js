import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import * as ActionUsuarios from '../../redux/actions/actionUsuarios';
import ImagemLogin from '../../imagens/login.svg';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            enviado: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ enviado: true });
        const { email, senha } = this.state;
        if (email && senha) {
            this.props.login(email, senha);
        }
    }

    validaForm() {
        return this.state.senha.length >= 8;
    }

    render() {
        const { loggingIn } = this.props.loginReducer;
        // eslint-disable-next-line no-useless-escape
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (
            <Row className="container-login">
                <Col xl="4" className="col-img">
                    <img className="imagem-login" src={ImagemLogin} alt="imagem login" />
                </Col>
                <Col xl="4" id="col-form">
                    <Row>
                        <h2 className="title text-center mb-3">Cashback Boticário</h2>
                    </Row>
                    <Row className="title text-center mb-3">
                        <h4>Bem-vindo! Acesse sua conta</h4>
                    </Row>
                    <AvForm>
                        <AvField name="email" label="Email" type="email"
                            placeholder="seuemail@email.com" className="mb-3"
                            value={this.state.email}
                            onChange={this.handleChange}
                            validate={{ required: {value: true, errorMessage: 'Email inválido'},
                                pattern: {value: regexEmail, errorMessage: 'Email inválido'},
                            }}
                        />
                        <AvField name="senha" label="Senha" type="password"
                            placeholder="Digite sua senha" 
                            value={this.state.senha}
                            onChange={this.handleChange}
                            validate={{ required: {value: true, errorMessage: 'Necessário no mínimo 8 caracteres'},
                                minLength: {value: 8, errorMessage: 'Necessário no mínimo 8 caracteres'},
                            }}
                        />
                        <Button disabled={!this.validaForm()}
                            className="mb-3" color="success" size="large" 
                            block onClick={this.handleSubmit}
                            debugger
                        >
                            Entrar
                        </Button>
                        { loggingIn }
                    </AvForm>
                    <p className="text-center">Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    loginReducer: state.loginReducer
})

const mapDispatchToProps = dispatch => bindActionCreators(ActionUsuarios, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
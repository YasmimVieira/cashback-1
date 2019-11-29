import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row, Table } from 'reactstrap';
import * as ActionUsuarios from '../../redux/actions/actionUsuarios';
import AddProduto from '../../components/ModalAddProduto/AddProduto';
import Footer from '../../components/Footer/Footer';
import avatar from '../../imagens/avatar.svg';
import logout from '../../imagens/logout.png';
import './Home.css';
class Home extends Component {

    render() {
        const { usuario } = this.props.loginReducer;        
        return(
            <div>
                <Row className="container-home ml-4">
                    <Col id="info-pessoal" className="text-center" sm={2}>
                        <img className="avatar" src={avatar} alt="avatar" />
                        <p>{usuario.nome}</p>
                        <p>{usuario.cpf}</p>
                        <Row className="saldo mt-5">
                            <p className="text-center mt-2">Você tem <strong>R$11,35</strong> disponíveis para a próxima compra</p>
                        </Row>
                        <Row className="text-right">
                            <Link to="/login" className="logout">
                                <img src={logout} alt="logout icone" />
                                <span className="logout-texto">Sair</span>
                            </Link>
                        </Row>       
                    </Col>
                    <Col sm={9} className="tabela-produtos ml-4">
                        <Row>
                            <h2 className="title ml-4">Produtos cadastrados</h2>
                        </Row>
                        <Table className="table-hover text-center">
                            <thead>
                                <tr>
                                <th>Código</th>
                                <th>Produto</th>
                                <th>Data</th>
                                <th>Valor</th>
                                <th>Cashback</th>
                                <th>Valor Cashback</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">124568</th>
                                <td>Perfume</td>
                                <td>13/10/2019</td>
                                <td>R$90,00</td>
                                <td>10%</td>
                                <td>R$9,00</td>
                                <td className="text-success font-weight-bold">Aprovado</td>
                                </tr>
                                <tr>
                                <th scope="row">248569</th>
                                <td>Creme de mão</td>
                                <td>13/10/2019</td>
                                <td>R$15,00</td>
                                <td>5%</td>
                                <td>R$0,75</td>
                                <td className="text-warning font-weight-bold">Em validação</td>
                                </tr>
                                <tr>
                                <th scope="row">345785</th>
                                <td>Creme de hidratação capilar</td>
                                <td>13/10/2019</td>
                                <td>R$20,00</td>
                                <td>8%</td>
                                <td>R$1,60</td>
                                <td className="text-danger font-weight-bold">Reprovado</td>
                                </tr>
                            </tbody>
                        </Table>
                        <AddProduto />
                    </Col>
                </Row>
                < Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginReducer: state.loginReducer
})

const mapDispatchToProps = dispatch => bindActionCreators(ActionUsuarios, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
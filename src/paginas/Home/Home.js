import React, { Component } from 'react';
import { Col, Row, Table, Button } from 'reactstrap';
import Avatar from '../../imagens/avatar.svg';

import './Home.css';

class Home extends Component {
    render() {
        return(
            <Row className="container-home ml-4">
                <Col sm={2}>
                    <Col id="info-pessoal">
                        <img className="avatar text-center" src={Avatar} alt="imagem login" />
                        <p>Victória Durães</p>
                        <p>387.112.485-37</p>
                    </Col>
                    <Col className="saldo">
                        <p className="text-center mt-2">Você tem <strong>R$15,00</strong> disponíveis para a próxima compra</p>
                    </Col>
                </Col>
                <Col sm={7} className="tabela-produtos ml-4">
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
                            <td className="text-success font-weight-bold">Aprovado</td>
                            </tr>
                            <tr>
                            <th scope="row">248569</th>
                            <td>Creme de mão</td>
                            <td>13/10/2019</td>
                            <td>R$15,00</td>
                            <td>5%</td>
                            <td className="text-warning font-weight-bold">Aguardando validação</td>
                            </tr>
                            <tr>
                            <th scope="row">345785</th>
                            <td>Creme de hidratação capilar</td>
                            <td>13/10/2019</td>
                            <td>R$20,00</td>
                            <td>8%</td>
                            <td className="text-danger font-weight-bold">Reprovado</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button className="text-right mb-3" color="success" size="large">
                        Adicionar produto
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default Home;
import React from 'react';
import { Col } from 'reactstrap';
import linkedin from '../../imagens/linkedin.png';
import github from '../../imagens/github.png'
import whatsapp from '../../imagens/whatsapp.png';

import './Footer.css';

export default () => {
    return (
      <footer className=" text-center footer">
        <Col className="">
            <p className="footer-texto pt-4 mb-2">Desenvolvido por Victória Durães</p>
            <div>
                <a href="https://www.linkedin.com/in/victoria-duraes/" 
                    target="_blank" rel="noopener noreferrer" >
                        <img className="text-center" src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/vicduraes" 
                    target="_blank" rel="noopener noreferrer" >
                        <img className="" src={github} alt="github" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5511960794437" 
                    target="_blank" rel="noopener noreferrer" >
                        <img className="" src={whatsapp} alt="whatsapp" />
                </a>
            </div>
        </Col>
        </footer>
    )
}
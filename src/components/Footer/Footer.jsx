import React from 'react';
import './Footer.css'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Footer = () => {
    return (
        
        <div className="footer">   
            <Row>
                <Col className="f1">Регистрируясь на сайте www.school.centrinvest.ru, <br/>
            вы даете согласие на обработку персональных данных в соответствии с правилами сайта.</Col>
                <Col className="f2">8 (863) 2-000-000
            <br/>dobro@centrinvest.ru</Col>
                <Col className="f3">© 1997–2021,
            <br/>Центр-инвест</Col>
            </Row>
        </div>
    );
};

export default Footer;

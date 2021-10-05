import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="f1">
                Регистрируясь на сайте www.school.centrinvest.ru, <br/>
                вы даете согласие на обработку персональных данных в соответствии с правилами сайта.
            </div>
            <div className="f2">
                8 (863) 2-000-000
                <br/>dobro@centrinvest.ru
            </div>  
            <div className="f3">
                © 1997–2021,
                <br/>Центр-инвест
            </div>
        </div>
    );
};

export default Footer;
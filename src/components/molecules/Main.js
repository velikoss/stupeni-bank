import React from 'react';
import Header from '../Header/Header.jsx'
import "./Main.css"


const Main = () => {
    return (
        <div className="Main">
            <div className="CourceDescription">
                <div id="Img"></div>
                <div className="Text">
                    <div id="Title">Курс "Малый бизннес"</div>
                    <div id="Description">
                        <p>12 тем, раскрывающих основы предпринимательства.</p>
                        <p>Вообще норм курс.</p>
                        <p>Реально топ.</p>
                        <p>Сертификат по окончанию курса.</p>
                    </div>
                    <button id="Next">Продолжить</button>
                </div>
            </div>
            
        </div>
    );
};

export default Main;
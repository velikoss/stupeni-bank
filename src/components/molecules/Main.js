import React from 'react';
import "./Main.css"
import {Link} from "react-router-dom";


const Main = () => {
    return (
        <div className="Main">
            <div className="CourseDescription">
                <div id="Img"></div>
                <div className="Text">
                    <div id="Title">Курс "Малый бизннес"</div>
                    <div id="Description">
                        <p>12 тем, раскрывающих основы предпринимательства.</p>
                        <p>Вообще норм курс.</p>
                        <p>Реально топ.</p>
                        <p>Сертификат по окончанию курса.</p>
                        <Link to="/course" id="Next" className="btn mt-4">Начать</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;

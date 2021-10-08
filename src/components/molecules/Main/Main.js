import React, {useState} from 'react';
import Header from '../Header/Header'
import "./Main.css"
import {Link} from "react-router-dom";
import {useAuth} from "../AuthContext";

const Main = () => {
    const {money, setMoney} = useAuth()
    return (
        <div className="Main">
            <Header money={money} setMoney={setMoney}/>
            <div className="CourseDescription">
                <div id="Img"/>
                <div className="Text">
                    <div id="Title">Курс "Малый бизнес"</div>
                    <div id="Description">
                        <p>Курс «Малый бизнес» включает 12 тем,
                        раскрывающих основы предпринимательства.
                        </p><p>
                        Вы можете изучить все темы и пройти проверочные тесты, </p> <p>а можете сразу сдать
                        экзамен.
                        </p>
                        <Link to="/course" id="Next" className="btn mt-4">Начать</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

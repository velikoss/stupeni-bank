import React from 'react';
import Header from '../molecules/Header/Header'
import "./Main.css"


const Main = () => {
  return (
    <div className="Main">
      <Header/>
      <div className="CourseDescription">
        <div id="Img"/>
        <div className="Text">
          <div id="Title">Курс "Малый бизнес"</div>
          <div id="Description">
            <p>12 тем, раскрывающих основы предпринимательства.</p>
            <p>Вообще норм курс.</p>
            <p>Реально топ.</p>
            <p>Сертификат по окончанию курса.</p>
            <button id="Next">Начать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

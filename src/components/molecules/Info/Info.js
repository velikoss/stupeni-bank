import React from 'react';
import "./Info.css"
import Header from "../Header/Header";
import im from "../../../img/info.jpg"
import {useAuth} from "../AuthContext";

const Info = () => {
  const {money, setMoney} = useAuth()

  return (
    <div>
      <Header money={money} setMoney={setMoney}/>
      <div className="text">
        <p className="cont">
          Всеобуч — это система знаний об основах организации малого бизнеса и налогообложения для предпринимателей и
          тех, кто хочет ими стать.
        </p>
        <p id="upText" className="cont">
          Здесь есть обучающие курсы, видеолекции, электронные книги и методические пособия, которые помогут будущим
          предпринимателям правильно оценить возможности и ресурсы, составить бизнес-план и грамотно организовать своё
          дело.
        </p>
        <img src={im} alt="Check Internet Connection"/>
        <p className="bot cont">
          Банк «Центр-инвест» с 2009 года обучает всех желающих предпринимательству, а с 2015 года — основам налоговой
          грамотности. Курс «Малый бизнес» разработан совместно с Ростовским институтом повышения квалификации, а в
          создании курса «Налогообложение» помогали ИУБиП, РГЭУ «РИНХ» и Федеральная налоговая служба.
        </p>
      </div>
    </div>
  );
};

export default Info;

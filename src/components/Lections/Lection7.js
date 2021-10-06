import React from 'react';
import Course from "../Course";
import Header from "../Header/Header";
import "Lection.css";

const Lection7 = () => {
  return (
    <div>
        <Header/>
        <Course/>
        <div className="Lection">
          <h1>Тема</h1>
          <p>Крутой текст</p>
        </div>
    </div>
  );
};

export default Lection7;

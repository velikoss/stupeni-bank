import React from 'react';
import {Link} from "react-router-dom";
import "./Buttons.css"

const CoursesButton = () => {
  return (
    <div>
      <Link to="/courses">Курсы</Link>
    </div>
  );
};

export default CoursesButton;
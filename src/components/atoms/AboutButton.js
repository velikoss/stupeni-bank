import React from 'react';
import {Link} from "react-router-dom";

const AboutButton = () => {
  return (
    <div>
      <Link to="/about">О проекте</Link>
    </div>
  );
};

export default AboutButton;
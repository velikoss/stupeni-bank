import React from 'react';
import "./Header.css"
import SignOutButton from "../../atoms/SignOutButton";
import CoursesButton from "../../atoms/CoursesButton";
import AboutButton from "../../atoms/AboutButton";
import FeedbacksButton from "../../atoms/FeedbacksButton";
import StudyMaterials from "../../atoms/StudyMaterials";

const Header = () => {
  return (
    <div className="head">
      <div className="img"/>
      <div className="title">Всеобуч<br/>ЦентрИнвест</div>
      <CoursesButton/>
      <AboutButton/>
      <FeedbacksButton/>
      {/*<StudyMaterials/>*/}
      <SignOutButton/>
    </div>
  );
};

export default Header;
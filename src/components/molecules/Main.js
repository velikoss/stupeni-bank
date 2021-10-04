import React, {useCallback, useContext} from "react";
import {Redirect, withRouter} from "react-router";
import Header from "./Header/Header";
import CoursesButton from "../atoms/CoursesButton";

const Main = () => {
  return (
    <div>
      <Header/>
    </div>
  );
};

export default withRouter(Main);

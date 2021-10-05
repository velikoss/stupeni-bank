import React, {useCallback, useContext} from "react";
import {Redirect, withRouter} from "react-router";
import Header from "./Header/Header";

const Main = () => {
  return (
    <div>
      <Header/>
    </div>
  );
};

export default withRouter(Main);

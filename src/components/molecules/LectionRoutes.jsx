

import React from 'react';
import {Link} from "react-router-dom";
import {Lection1, Lection2, Lection3, Lection4, Lection5, Lection6, Lection7,
    Lection8, Lection9, Lection10, Lection11, Lection12} from "./components/molecules/Lections/";  

const LectionRoutes = () => {
  return (
    <div>
        <Route exact path="/courses/lection1" component={Lection1}/>
        <Route exact path="/courses/lection2" component={Lection2}/>
        <Route exact path="/courses/lection3" component={Lection3}/>
        <Route exact path="/courses/lection4" component={Lection4}/>
        <Route exact path="/courses/lection5" component={Lection5}/>
        <Route exact path="/courses/lection6" component={Lection6}/>
        <Route exact path="/courses/lection7" component={Lection7}/>
        <Route exact path="/courses/lection8" component={Lection8}/>
        <Route exact path="/courses/lection9" component={Lection9}/>
        <Route exact path="/courses/lection10" component={Lection10}/>
        <Route exact path="/courses/lection11" component={Lection11}/>
        <Route exact path="/courses/lection12" component={Lection12}/>
    </div>
  );
};

export default LectionRoutes;

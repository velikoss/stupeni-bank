import React from 'react';
import {Link} from "react-router-dom";
import Lection1 from "./Lections/Lection1";  
import Lection2 from "./Lections/Lection2";  
import Lection3 from "./Lections/Lection3";  
import Lection4 from "./Lections/Lection4";  
import Lection5 from "./Lections/Lection5";  
import Lection6 from "./Lections/Lection6";  
import Lection7 from "./Lections/Lection7";  
import Lection8 from "./Lections/Lection8";  
import Lection9 from "./Lections/Lection9";  
import Lection10 from "./Lections/Lection10";  
import Lection11 from "./Lections/Lection11";  
import Lection12 from "./Lections/Lection12";  

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

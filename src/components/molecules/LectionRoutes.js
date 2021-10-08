import React from 'react';
import Lection1 from "../Lections/Lection1";
import Lection2 from "../Lections/Lection2";
import Lection7 from "../Lections/Lection1";
import Lection3 from "../Lections/Lection1";
import Lection4 from "../Lections/Lection1";
import Lection5 from "../Lections/Lection1";
import Lection6 from "../Lections/Lection1";

import {Route} from "react-router";
import Test1 from "../tests/Test1";
import PrivateRoute from "./PrivateRoute";

const LectionRoutes = () => {
  return (
    <div>
      <PrivateRoute exact path="/course/lection1" component={Lection1}/>
      <PrivateRoute exact path="/course/test1" component={Test1}/>
      <PrivateRoute exact path="/course/lection2" component={Lection2}/>
      {/*<Route exact path="/course/lection3" component={Lection3}/>*/}
      {/*<Route exact path="/course/lection4" component={Lection4}/>*/}
      {/*<Route exact path="/course/lection5" component={Lection5}/>*/}
      {/*<Route exact path="/course/lection6" component={Lection6}/>*/}
      {/*<Route exact path="/course/lection7" component={Lection7}/>*/}
      {/*<Route exact path="/courses/lection8" component={Lection8}/>*/}
      {/*<Route exact path="/courses/lection9" component={Lection9}/>*/}
      {/*<Route exact path="/courses/lection10" component={Lection10}/>*/}
      {/*<Route exact path="/courses/lection11" component={Lection11}/>*/}
      {/*<Route exact path="/courses/lection12" component={Lection12}/>*/}
    </div>
  );
};

export default LectionRoutes;

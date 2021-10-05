import React from 'react';
import app from "../../firebase_config/firebase";
import {Link} from "react-router-dom";

function SignOutButton() {
  return (
    <div>
      <Link to="/login"><img src="../../img/Vector.svg" alt="Регайся, быстро!"/></Link>
      <button onClick={() => app.auth().signOut()}>Выйти</button>
    </div>
  );
}

export default SignOutButton;

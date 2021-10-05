import React from 'react';
import app from "../../firebase_config/firebase";

function SignOutButton() {
  return (
    <div>
      <button onClick={() => app.auth().signOut()}>Выйти</button>
    </div>
  );
}

export default SignOutButton;

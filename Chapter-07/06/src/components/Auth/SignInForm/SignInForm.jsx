import React from 'react';
import './SignInForm.css'

const SignInForm = () => {

  return (
<>
    <div className="signInContainer">
    <form>
      <div className="signInForm">    <label htmlFor="email"></label>
        <input   type="email"  />
       <label htmlFor="password"></label>
        <input  type="password" />
            <button></button>
      </div>
    </form>
    </div>
</>

  );
};
export default SignInForm;
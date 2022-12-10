import React,{ useState } from 'react';
import './SignUp.css';

const SignUp = () => {
	const[name, setName ] = useState("");
	const [ email, setEmail ] = useState("" );
	const [password, setPassword] = useState("");

  const nameHandler = (e) => {
		setName(e.target.value);
	  };

	const emailHandler = (e) => {
	  setEmail(e.target.value);
	};

	const passwordHandler = (e) => {
	  setPassword(e.target.value);
	};

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Name: ${name}: Email: ${email} Password: ${password}`);
  };



  return (
    <>
    <div className="signUpContainer">

    <form onSubmit={onSubmitHandler}>
    <h2>Create an account</h2>
      <div className="signUpForm">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
		      value={name}
          onChange={nameHandler}

        />


	 <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
		      value={email}
          onChange={emailHandler}
        />

       <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
		      value={password}
          onChange={passwordHandler}
        />


            <button>Register</button>
     <div className="signUpFormOutput">
     <span>Name:{name}</span>
    <span>Email:{email}</span>
    <span>Password:{password}</span>
    </div>
      </div>

    </form>



    </div>

</>
  );

};
export default SignUp;

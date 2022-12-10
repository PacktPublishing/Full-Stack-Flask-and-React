import React, { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Email: ${email} Password: ${password}`);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={emailHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={passwordHandler}
        />
      </div>

      <button>Sign In</button>
    </form>
  );
};
export default SignInForm;

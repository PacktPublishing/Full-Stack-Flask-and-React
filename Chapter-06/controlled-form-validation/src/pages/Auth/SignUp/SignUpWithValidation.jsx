import React,{ useState,useEffect } from 'react';
import './SignUp.css';

const SignUpWithValidation = () => {
	const initialValues = { name: "", email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

  const onChangeHandler = (e) => {
	const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
	e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  useEffect(() => {

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    return errors;
  };


  return (
    <>
    <div className="signUpContainer">
    <form onSubmit={onSubmitHandler}>
    <h2>Create an account</h2>
	{Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Registering successfully!</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <div className="signUpForm">

        <label htmlFor="name">Name</label>
		<p style={{color:'red', fontWeight:'bold'}}>{formErrors.name}</p>

        <input
          id="name"
          type="text"
          name="name"
		  value={formValues.name}
		  onChange={onChangeHandler}

        />

	 <label htmlFor="email">Email Address</label>
	 <p style={{color:'red', fontWeight:'bold'}}>{formErrors.email}</p>
        <input
          id="email"
          type="email"
          name="email"
		  value={formValues.email}
          onChange={onChangeHandler}
        />

       <label htmlFor="password">Password</label>
	   <p style={{color:'red', fontWeight:'bold'}}>{formErrors.password}</p>
        <input
          id="password"
          type="password"
          name="password"
		  value={formValues.password}
          onChange={onChangeHandler}
        />

            <button>Register</button>
     <div className="signUpFormOutput">
		{/**
	 <span>Name:{formValues.name}</span>
	 <span>Email:{formValues.email}</span>
  <span>Password:{formValues.password}</span>*/}
    </div>
      </div>

    </form>



    </div>

</>
  );

};
export default SignUpWithValidation;

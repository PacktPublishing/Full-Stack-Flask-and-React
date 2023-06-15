import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventRegistration.css';

const EventRegistration = () => {
  // Initial form values
  const initialValues = { name: '', email: '', phone: '', subject: '' };

  // State variables
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [response, setResponse] = useState({ success: false });
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  // Options for the subject select input
  const OPTIONS = [
    { value: '', label: '' },
    { value: 'React: From First Steps to Professional', label: 'React: From First Steps to Professional' },
    { value: 'A Tour of React Design Patterns', label: 'A Tour of React Design Patterns' },
    { value: 'Web Components', label: 'Web Components' },
    { value: 'Build a Fullstack App from Scratch with Flask and React', label: 'Build a Fullstack App from Scratch with Flask and React' }
  ];

  // Form validation function
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.firstname) {

      errors.firstname = 'Firstname is required!';
    }
    if (!values.lastname) {

      errors.lastname = 'Lastname is required!';
	  }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!values.phone) {
      errors.phone = 'Phone field is required';
    } else if (values.phone.length < 10) {
      errors.phone = 'Phone number must be at least 10 characters';
    }

    if (!values.subject) {
      errors.subject = 'Subject field is required';
    }

    return errors;
  };

  // Form input change handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    // Send form data to the server
    try {
      const response = await axios.post('/api/v1/events-registration', formValues);
      setResponse(response.data);

      if (response.data.success) {
        setFeedback('You have successfully registered for this event!');
        setStatus('success');
      } else {
        setFeedback('An error occurred: ' + response.data.error);
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
    }

    setIsSubmitted(true);
  };

  // Send form data to the server when formValues change
  useEffect(() => {
    sendEventData();
  }, [formValues]);

  // Function to send form data to the server
  async function sendEventData() {
    try {
      const response = await axios.post('/api/v1/events-registration', formValues);
      setResponse(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Render the component
  return (
    <>
      <div className="section">
        <div className="form-container">
          <h1>Event Attendee Registration</h1>


          <div className="feedback">

            <form onSubmit={handleSubmit}>

              <div className="input-container">

                <label htmlFor="firstname">First Name</label>

                <input

                  id="firstname"

                  type="text"

                  name="firstname"

                  value={formValues.firstname}

                  onChange={onChangeHandler}

                />

                <p style={{ color: 'red', fontWeight: 'bold' }}>

                  {formErrors.firstname}

                </p>

              </div>

			      <div className="input-container">

                <label htmlFor="lastname">Last Name</label>

                <input

                  id="lastname"

                  type="text"

                  name="lastname"

                  value={formValues.lastname}

                  onChange={onChangeHandler}

                />

                <p style={{ color: 'red', fontWeight: 'bold' }}>

                  {formErrors.lastname}

                </p>

              </div>

              <div id="input-container">

                <label htmlFor="email">Email </label>

                <input

                  id="email"

                  type="text"

                  name="email"

                  value={formValues.email}

                  onChange={onChangeHandler}

                />

                <p style={{ color: 'red', fontWeight: 'bold' }}>

                  {formErrors.email}

                </p>

              </div>

              <div id="input-container">

                <label htmlFor="phone">Phone</label>

                <input

                  id="phone"

                  type="text"

                  name="phone"

                  value={formValues.phone}

                  onChange={onChangeHandler}

                />

                <p style={{ color: 'red', fontWeight: 'bold' }}>

                  {formErrors.phone}

                </p>

              </div>
			        <div className="input-container">

                <label htmlFor="job_titl">Job Title</label>

                <input

                  id="job_title"

                  type="text"

                  name="job_title"

                  value={formValues.job_title}

                  onChange={onChangeHandler}

                />



              </div>
			        <div className="input-container">

                <label htmlFor="company_name">Company Name</label>

                <input

                  id="company_name"

                  type="text"

                  name="company_name"

                  value={formValues.company_name}

                  onChange={onChangeHandler}

                />


              </div>
			        <div className="input-container">

                <label htmlFor="csize">Company Size</label>

                <input

                  id="csize"

                  type="text"

                  name="company_size"

                  value={formValues.company_size}

                  onChange={onChangeHandler}

                />


              </div>

              <div id="input-container">

                <label htmlFor="subject">Subject</label>

                <select

                  id="subject"

                  type="subject"

                  name="subject"

                  value={formValues.subject}

                  onChange={onChangeHandler}

                >

                  {OPTIONS.map((option) => (

                    <option key={option.value} value={option.value}>

                      {option.label}

                    </option>

                  ))}

                </select>

                <p style={{ color: 'red', fontWeight: 'bold' }}>

                  {formErrors.subject}

                </p>

              </div>

              <div id="btn-section">

                <button>Join Now</button>
              </div>

              {feedback && (
                <div className={`feedback ${status}`}>{feedback}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventRegistration;

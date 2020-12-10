import React, { useState } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Register.css";

// import UserContext from "../../context/UserContext";
import Axios from "axios";
// import ErrorNotice from "../misc/ErrorNotice";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLasName] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [city, setCity] = useState();

  console.log(typeof email);
  console.log(typeof password);
  console.log(typeof firstName);
  console.log(typeof lastName);
  console.log(typeof mobileNumber);
  console.log(typeof city);

  const [validated, setValidated] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    const form = e.currentTarget;

    const newUser = {
      email,
      password,
      firstName,
      lastName,
      city,
      mobileNumber,
    };
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    await Axios.post(
      "http://localhost:8080/api/v1/auth/register",
      newUser
    ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <>
      <div className='registerPage'>
        <section>
          <div>
            <h2>Create an account</h2>
            {/* {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)} */}
          </div>

          <div>
            {/* loob */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md='12'
                  controlId='validationCustomEmailAddress'
                >
                  <Form.Label className='formLabel'>Email </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='email'
                      placeholder='Ex: samsmith@gmail.com'
                      aria-describedby='inputGroupPrepend'
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      Invalid email address.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom04'>
                  <Form.Label className='formLabel'>Password</Form.Label>
                  <Form.Control
                    type='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Label className='passwordLabel'>
                    Password must Contain between 8–36 characters, at least 1
                    upper-case letter and at least 1 number
                  </Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md='12' controlId='validationCustom01'>
                  <Form.Label className='formLabel'>First Name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Ex: Sam'
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md='12' controlId='validationCustom02'>
                  <Form.Label className='formLabel'>Last Name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Ex: Smith'
                    onChange={(e) => setLasName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom03'>
                  <Form.Label className='formLabel'>City</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Ex: Quezon City'
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Invalid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom05'>
                  <Form.Label className='formLabel'>Mobile Number</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Ex: 09123456789'
                    required
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please provide 11 digit mobile number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Router>
                  <Form.Label className='termsLabel'>
                    By creating an account, you agree to our
                    <Link to='/about'> Privacy Policy</Link> and{" "}
                    <Link to='/about'> Terms of use</Link>.
                  </Form.Label>
                </Router>
              </Form.Group>
              <Button className='customButton' type='submit'>
                CREATE ACCOUNT
              </Button>
            </Form>
            {/* loob */}

            <Router>
              <p className='hasAccount'>
                Already have an account? <Link to='.#'>Sign in</Link>
              </p>
            </Router>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;

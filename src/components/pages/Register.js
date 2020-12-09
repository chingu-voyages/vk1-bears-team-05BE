import React, { useState } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className='registerPage'>
        <section>
          <div>
            <h2>Create an account</h2>
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
                    />
                    <Form.Control.Feedback type='invalid'>
                      Invalid email address.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom04'>
                  <Form.Label className='formLabel'>Password</Form.Label>
                  <Form.Control type='password' required />
                  <Form.Label className='passwordLabel'>
                    Password must Contain between 8–36 characters, at least 1
                    upper-case letter and at least 1 number
                  </Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md='12' controlId='validationCustom01'>
                  <Form.Label className='formLabel'>First Name</Form.Label>
                  <Form.Control required type='text' placeholder='Ex: Sam' />
                </Form.Group>
                <Form.Group as={Col} md='12' controlId='validationCustom02'>
                  <Form.Label className='formLabel'>Last Name</Form.Label>
                  <Form.Control required type='text' placeholder='Ex: Smith' />
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom03'>
                  <Form.Label className='formLabel'>City</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Ex: Quezon City'
                    required
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

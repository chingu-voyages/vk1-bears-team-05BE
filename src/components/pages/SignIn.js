import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ForgotPW from "./ForgotPW"

import "./SignIn.css";

function SignIn({ SignIn, error }) {

    const [details, setDetails] = useState({email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        SignIn(details);
    }

    return (
        <>
        <Container className="SignInPage">
            <Row>
                <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                    <div className="SignInBox">
                        <h1>Sign In</h1>
                    
                        <Form className="mt-4" onSubmit={submitHandler}>

                            {/* SHOW ERROR */}
                            {(error !== "") ? ( <Form.Label className="error">{error}</Form.Label>) : ""}

                            <Form.Group>
                                <Form.Label className="formLabel">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" 
                                onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="formLabel">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your Password" 
                                onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}/>
                            </Form.Group>
            
                            <Form.Group className="float-left">
                                <Form.Check className="ml-4 formSub" type="checkbox" label="Keep me signed in"/>
                            </Form.Group>

                            <a className="mr-4 float-right formLink" href={ForgotPW}>Forgot your password?</a>

                            <Button className="mt-4 customButton" type="submit">
                                SIGN IN
                            </Button>

                            <Form.Group className="mt-4 text-center"> 
                                    <Form.Label className="formSub">Not a member?</Form.Label>
                                    <a className="ml-2 formLink" href="link">Register Now</a>
                            </Form.Group>

                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default SignIn;
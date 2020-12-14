import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./CreateRequestPage.css";

const CreateRequestPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <div className='CreateRequest'>
        <section>
          <div>
            <h2>Request Blood</h2>
            <p className='titlePara'>
              Share us your story and the world know why you need blood. dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est.
            </p>
          </div>

          <div>
            {/* loob */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md='12' controlId='validationTitle'>
                  <Form.Label className='formLabel'>Title</Form.Label>
                  <Form.Control type='text' required />
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationYourStory'>
                  <Form.Label className='formLabel'>Your Story</Form.Label>
                  <Form.Control required as='textarea' rows={3} />
                  <Form.Label className='.textLabel'>
                    Maximum of 1000 words
                  </Form.Label>
                </Form.Group>

                <Form.Group as={Col} md='12'>
                  <Form.Label className='formLabel'>
                    Upload Your Photo
                  </Form.Label>
                  <section className='dragNdrop'>
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <div>
                        <svg
                          width='14'
                          height='16'
                          viewBox='0 0 14 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M4.26519 12.2353H9.91225V6.58824H13.677L7.08872 0L0.500488 6.58824H4.26519V12.2353ZM0.500488 14.1176H13.677V16H0.500488V14.1176Z'
                            fill='#8C94A4'
                          />
                        </svg>

                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </div>
                  </section>
                  <Form.Label className='textLabels'>
                    Recommended size: 600x600 pixles ( jpg or png format )
                  </Form.Label>
                  <aside>
                    <p>{files}</p>
                  </aside>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationBloodType'>
                  <Form.Label className='formLabel'>Blood Type</Form.Label>
                  <Form.Control required as='select'>
                    <option>O+</option>
                    <option>O-</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>B+</option>
                    <option>B-</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md='6'
                  controlId='validationAmountBloodNeeded'
                >
                  <Form.Label className='formLabel'>
                    Amount of Blood Needed (Bag)
                  </Form.Label>
                  <Form.Control
                    required
                    placeholder='Ex: 1 (Bag)'
                    type='number'
                  />
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationCustom05'>
                  <Form.Label className='formLabel'>Mobile Number</Form.Label>
                  <Form.Control type='number' required />
                  <Form.Control.Feedback type='invalid'>
                    Please provide 11 digit mobile number.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationClosingDate'>
                  <Form.Label className='formLabel'>
                    Request Closing Date
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='date'
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationHospital'>
                  <Form.Label className='formLabel'>Hospital</Form.Label>
                  <Form.Control required type='text' />
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationLocation'>
                  <Form.Label className='formLabel'>Location</Form.Label>
                  <Form.Control required type='text' />
                </Form.Group>
              </Form.Row>
              <div className='d-flex buttonGrp'>
                <button className='cancelButton' type='submit'>
                  CANCEL
                </button>
                <button className='saveButton' type='submit'>
                  REQUEST BLOOD
                </button>
              </div>
            </Form>
            {/* loob */}
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateRequestPage;

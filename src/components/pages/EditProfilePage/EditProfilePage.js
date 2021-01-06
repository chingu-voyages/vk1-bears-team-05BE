import React, { useState , useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Col, InputGroup } from "react-bootstrap";

import {profileActions , userActions} from'../../../_actions'
import jwt_decode from "jwt-decode";
import {profileConstants} from '../../../_constants'
import { useDispatch, useSelector} from "react-redux";
import instance from '../../../_helpers/axios'
import { store } from 'react-notifications-component'

import "./EditProfilePage.css";

const EditProfilePage = (props) => {

  const [validated, setValidated] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const {user, errors} = auth;
  const {success, profile , valid} = profileData;

  useEffect(() => {

    if (valid === true) {
      props.history.push("/profilePage")
    }

  }, [valid, props.history, props.location])

  const file = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  console.log(file.path)

  const uploadFileHandler = async(e) => {

    const token = localStorage.jwtToken;
    const decoded = jwt_decode(token)
    const profileId = decoded.profileId

    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    

    try{
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const result = instance
        .post('/profile/upload/'+profileId, formData, config)
        .then((res) => {

          console.log(res)
          if (res.status === 200) {
            dispatch({
              type: profileConstants.PROFILE_UPLOAD_SUCCESS,
            });
          } 
        })
        .catch((err) => {
          if (err.response.status === 400) {
            dispatch({
              type: profileConstants.PROFILE_UPLOAD_FAIL,
            });
          } 
        });

        console.log(result)
    } catch(error){
       console.error(error)
    }
}

  const [userDetails, setUserDetails] = useState({ email: "", firstName: "" , lastName: "" , city: "" , mobileNumber: "" });
  const [profileDetails, setProfileDetails] = useState({ bloodType: "", userAbout: "" });

  console.log(userDetails)
  console.log(profileDetails)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();

      dispatch(profileActions.updateProfileAction(profileDetails))
      dispatch(userActions.updateUserAction(userDetails))

  };

  return (
    <>
      <div className='EditProfilePage'>
        <section>
          <div>
            <h2>Edit Profile</h2>
          </div>

          <div>
            {/* loob */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md='12'>
                  <Form.Label className='formLabel'>Profile Photo</Form.Label>
                  <section className='dragNdrop'>
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()}
                      onChange = {uploadFileHandler}
                       />
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
                  <Form.Label className='passwordLabel'>
                    Recommended size: 300x300 pixles ( jpg or png format )
                  </Form.Label>
                  <aside>
                    <p>{file}</p>
                  </aside>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationCustom01'>
                  <Form.Label className='formLabel'>First Name</Form.Label>
                  <Form.Control required type='text' onChange={(e) =>
                        setUserDetails({ ...userDetails, firstName: e.target.value })
                      } />
                </Form.Group>
                <Form.Group as={Col} md='6' controlId='validationCustom02'>
                  <Form.Label className='formLabel'>Last Name</Form.Label>
                  <Form.Control required type='text' onChange={(e) =>
                        setUserDetails({ ...userDetails, lastName: e.target.value })
                      } />
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationAboutMe'>
                  <Form.Label className='formLabel'>About Me</Form.Label>
                  <Form.Control required as='textarea' rows={3} onChange={(e) =>
                        setProfileDetails({ ...profileDetails, userAbout: e.target.value })
                      } />
                  <Form.Label className='passwordLabel'>
                    Maximum of 1000 characters
                  </Form.Label>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationBloodType'>
                  <Form.Label className='formLabel'>Blood Type</Form.Label>
                  <Form.Control required as='select' onChange={(e) =>
                        setProfileDetails({ ...profileDetails, bloodType: e.target.value })
                      }>
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

                <Form.Group as={Col} md='12' controlId='validationCustom03'>
                  <Form.Label className='formLabel'>City</Form.Label>
                  <Form.Control type='text' required onChange={(e) =>
                        setUserDetails({ ...userDetails, city: e.target.value })
                      } />
                  <Form.Control.Feedback type='invalid'>
                    Invalid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md='6'
                  controlId='validationCustomEmailAddress'
                >
                  <Form.Label className='formLabel'>Email </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='email'
                      aria-describedby='inputGroupPrepend'
                      required
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, email: e.target.value })
                      }
                    />
                    <Form.Control.Feedback type='invalid'>
                      Invalid email address.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationCustom05'>
                  <Form.Label className='formLabel'>Mobile Number</Form.Label>
                  <Form.Control type='number' required onChange={(e) =>
                        setUserDetails({ ...userDetails, mobileNumber: e.target.value })
                      } />
                  <Form.Control.Feedback type='invalid'>
                    Please provide 11 digit mobile number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <div className='d-flex buttonGrp'>
                <button className='cancelButton' type='submit'>
                  CANCEL
                </button>
                <button className='saveButton' type='submit'>
                  SAVE
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

export default EditProfilePage;

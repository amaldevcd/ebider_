import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import axios from "../api/axios";
import Forms from "../components/SignUpForm";
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
import {signupUrl} from "../url/url";
// import axios from "axios";
import useAuth from "../hooks/useAuth";
import useLocalStorageRef from "../hooks/LocalStorage"

function Register() {
  
  
  const [error, setError] = useState("");
  const location=useLocation();
  const navigate = useNavigate(); 
  const {auth,setAuth}=useAuth();
  const [userData, setUserData, removeUserData] = useLocalStorageRef("user")
  const from ="user/dashboard" || "/";
  // useEffect(() => {
  //   if(auth)
  //   navigate("/owner/dashboard");
  // }, [auth]);
 
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold-display-4">Register</h1>
          {error !== "" && <Alert variant="danger">{error}</Alert>}
          <Forms
            onSubmit={async (values, { _setSubmitting }) => {
              ///contain values from the sign up form
              // console.log(values);
                if (check(values.password, values.confirmPassword)) {   //to check the password is matching
                  //e.preventDefault();
                

                  try {
                    setError("");
                    // console.log(values);
                //    const {user}=await signupWorker(values.email, values.password);        //to auth and create a userId
                    // console.log(user);
                    
                      
                       const userInfo = {
                         firstName: values.firstName ,
                         lastName: values.lastName,
                         phoneNumber: values.phoneNo,
                         email: values.email,
                         password: values.password,
                         address:"palk",
                         city:"dwkn",
                         state:"fnmwn",
                         country:"n3kn",
                         zipCode:"678732",

                       }
                       console.log(userInfo);
                      const response=await axios.post(signupUrl,
                      JSON.stringify(userInfo),
                      {
                        headers:{
                       'Content-Type': 'application/json',
                        "Accept": "*/*",
                        },
                        withCredentials:true
                      }
                      )
                      console.log(response);
                      setAuth(response.data.user);
                      setUserData(response.data.user);
                      navigate(from,{replace:true});
                      console.log("Registered Successfully!");
                      
                    }
                  
                   catch(err) {
                    console.log(err);
                     if(err.response?.status==409)
                    {
                      console.log('Username Taken');
                    }
                    else if(err?.response)
                    { console.log(!err?.response);
                      console.log('no server response');
                    }
                    else
                    {
                      console.log("Failed to create an account");
                      setError("Failed to create an account");
                      console.error(err);
                    }
                  }
                  
                }
                else 
                  {
                    console.log("Passwords Not Same!");
                    // setError(true);
                  }

        
            }}
          />
        </div>
        <div className="w-100 text-left mt-2 ">
          Already have an account? <Link to="/login" className="text-decoration-none" >Log In</Link>
        </div>
        <div className="col-sm-7 d-flex justify-content-center align-items-center">
         {/* <img
            className="img-fluid  w-50  "
            style={{ JustifyContent: "Right" }}
            src={""}
            alt="not found"
          /> */}
         
        </div>
      </div>
    </div>
  );
}

function check(password, confirmPassword) {
  if (password === confirmPassword)
    return true;
  return false;
}

export default Register;































// import { useState, useEffect,useRef } from 'react';
// import styled from 'styled-components';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
// import FormRow from '../components/FormRow';
// import axios from 'axios';
// import {signupUrl} from "../url/url";
// import useLocalState from '../utils/localState';
// import email from '../assets/Email.svg';
// import phone from '../assets/phone.svg';
// import person from '../assets/person.svg';
// import lock from '../assets/lock_person.svg';
// import useAuth from "../hooks/useAuth";
// import useLocalStorageRef from "../hooks/LocalStorage"
// function Register() {
//   const location=useLocation();
//   const navigate = useNavigate(); 
//   const {auth,setAuth}=useAuth();
//   const [userData, setUserData, removeUserData] = useLocalStorageRef("user")
//   const [values, setValues] = useState({
//     firstName: '',
//     email: '',
//      phoneNumber:'',
//     password: '',
//   });

//   const {
//     alert,
//     showAlert,
//     loading,
//     setLoading,
//     success,
//     setSuccess,
//     hideAlert,
//   } = useLocalState();

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//     console.log(values);
//   };
//   const onSubmit = async (e) => {
//     // e.preventDefault();
//     // hideAlert();
//     setLoading(true);
//     console.log(values);
//     const { firstName, email, phoneNumber,password } = values;
//     const registerNewUser = { firstName, email,phoneNumber,password };

//     try {
//       const { data } = await axios.post(
//         signupUrl,
//         registerNewUser
//       );

//       setSuccess(true);
//       console.log(data);
//       setAuth(data.user);
//       setUserData(data.user);
//       navigate(from,{replace:true});
//       console.log("Registered Successfully!");
//       setValues({ name: '', email: '', password: '' });
//       showAlert({ text: data.msg, type: 'success' });
//       console.log(alert);

//     } catch (error) {
//       const { msg } = error.response.data;
//       showAlert({ text: msg || 'there was an error' });
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <Wrapper className='page'>
//       <div>{alert.text}</div>
//         {/* {alert.show && (
//           <div className={`alert alert-${alert.type}`}>{alert.text}</div>
//         )} */}
//         {!success && (
//           <form
//             className={loading ? 'form form-loading' : 'form'}
//             onSubmit={onSubmit}
//           >
//             {/* single form row */}

//             <FormRow
//               type='name'
//               name='firstName'
//               icon={person}
//               value={values.firstName}
//               handleChange={handleChange}
//             />

//             {/* single form row */}
//             <FormRow
//               type='email'
//               name='email'
//               icon={email}
//               value={values.email}
//               handleChange={handleChange}
//             />
//             <FormRow
//               type='number'
//               name='phoneNumber'
//               icon={phone}
//               value={values.phoneNumber}
//               handleChange={handleChange}
//             />
//             {/* end of single form row */}
//             {/* single form row */}
//             <FormRow
//               type='password'
//               name='password'
//               icon={lock}
//               value={values.password}
//               handleChange={handleChange}
//             />
//             {/* end of single form row */}
//             <button type='submit' className='btn btn-block' disabled={loading}>
//               {loading ? 'Loading...' : 'Register'}
//             </button>
//             <p>
//               Already a have an account?
//               {/* <Link to='/login' className='login-link'>
//                 Log In
//               </Link> */}
//             </p>
//           </form>
//         )}
//       </Wrapper>
//     </>
//   );
// }

// const Wrapper = styled.section`
//   .alert {
//     margin-top: 3rem;
//     margin-bottom: -1.5rem;
//   }
//   h4 {
//     text-align: center;
//   }
//   p {
//     margin: 0;
//     margin-top: 1rem;
//     text-align: center;
//   }
//   .login-link {
//     display: inline-block;
//     margin-left: 0.25rem;
//     text-transform: capitalize;
//     color: var(--primary-500);
//     cursor: pointer;
//   }
//   .btn:disabled {
//     cursor: not-allowed;
//   }
// `;

// export default Register;

// import React from 'react';
import "./style/profile.css";
import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import person from '../assets/personProfile.jpg';
import FormRow from './FormRow';
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';
import {userUrl} from "../url/url.js";
import useLocalStorageRef from "../hooks/LocalStorage"
import axios from "../api/axios"
function Profile(){
//   const { user, logoutUser } = useGlobalContext();


const [userData, setUserData, removeUserData] = useLocalStorageRef("user")
//const location=useLocation();
const [user,setUser]=useState({})

console.log(userData.current._id);

const [values, setValues] = useState({
  firstName:'',
  lastName:'',
  phoneNumber:'',
  email:'',
  address:'',
  city:'',
  state:'',
  zipCode:'',
  country: '',
});


useEffect(()=>{
  axios.get(userUrl+`/${userData.current._id}`)
  .then(res=>{
    console.log("res.data",res.data);
      setUser(res.data);
      console.log('user.firstName',user.lastName);
      setValues(res.data);
      //dataValues.current = res.data.hostel;
    }).catch(err=>{
      console.log(err)
      
    })
  },[])
  
// const [values, setValues] = useState({
//     firstName:user.firstName || '',
//     lastName:user.lastName || '',
//     phoneNumber:user.phoneNumber||'',
//     email: user.email ||'',
//     address:user.address || '',
//     city: user.city ||'',
//     state:user.state || '',
//     zipCode:user.zipCode || '',
//     country: user.country ||'',
//   });






  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };



  return (
   <>
    <div className="profile">
    <div className="profile-header">
    <img alt="owner-img" src={person}/>
    <h3>Johan Martin SR</h3>
    </div>
    <div className="profile-form">
        <form>
        <div className="profile-form-row">
        <div className="profile-form-col">
        <FormRow
            type='text'
            name='firstName'
            placeholder={values.firstName}
            icon="null"
            value={values.firstName}
            handleChange={handleChange}
          />
        </div>
        <div className="profile-form-col">
        <FormRow
            type='text'
            name='lastName'
            placeholder={values.lastName}
            icon="null"
            value={values.lastName}
            handleChange={handleChange}
          />
          </div>
          </div>
          <div className="profile-form-row">
          <div className="profile-form-col">
          <FormRow
            type='text'
            name='phoneNumber'
            placeholder={values.phoneNumber}
            icon="null"
            value={values.phoneNumber}
            handleChange={handleChange}
          />
          </div>
          <div className="profile-form-col">
           <FormRow
            type='email'
            name='email'
            placeholder={values.email}
            icon="null"
            value={values.email}
            handleChange={handleChange}
          />
        </div>
        </div>
           <FormRow
            type='text'
            name='address'
            placeholder={values.address}
            icon="null"
            value={values.address}
            handleChange={handleChange}
          />
          <div className="profile-form-row">
          <div className="profile-form-col">
          <FormRow
            type='text'
            name='city'
            placeholder={values.city}
            icon="null"
            value={values.city}
            handleChange={handleChange}
          />
           </div>
           <div className="profile-form-col">
           <FormRow
            type='text'
            name='state'
            placeholder={values.state}
            icon="null"
            value={values.state}
            handleChange={handleChange}
          />
          </div>
          </div>
          <div className="profile-form-row">
          <div className="profile-form-col">
           <FormRow
            type='number'
            name='zipCode'
            placeholder={values.zipCode}
            icon="null"
            value={values.zipCode}
            handleChange={handleChange}
          />
          </div>
          <div className="profile-form-col">
           <FormRow
            type='text'
            name='country'
            placeholder={values.country}
            icon="null"
            value={values.country}
            handleChange={handleChange}
          />
          </div>
          </div>
          <button onClick={(e)=>{
            console.log("here");
          }} 
          className="profile-form-update-btn">Update Profile</button>
          <button className="profile-form-cancel-btn">Cancel</button>
        </form>
          </div>
    

    </div>
   </>
  );
};

export default Profile;

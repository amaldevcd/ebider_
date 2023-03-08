import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import "./style/home.css";
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';
import Card from '../components/Card';
function Home(){
//   const { user, logoutUser } = useGlobalContext();
  return (
    <>
    <div className='auction-row'>
      <Card/>
      <Card/>
      <Card/>

    </div>
     
    </>
  );
};

export default Home;
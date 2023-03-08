import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import howworkA from '../assets/how-work1.png';
import howworkB from '../assets/how-work2.png';
import howworkC from '../assets/how-work3.png';
import "./style/howItWorkPage.css"
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';

function HowItWork(){
//   const { user, logoutUser } = useGlobalContext();
  return (
      <div className='how-work'>
        <div className='how-work'>
        <div className='how-work-desc'>
          <h2>01.</h2>
           <h3>Register Now & Start Selling Your Things</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,</p>
<div className='how-work-desc-btn' >Register Account</div>
        </div>
        <div className='how-work-img'>
        <img  className="how-work-image" alt="image" src={howworkA}/>
        </div>
        </div>


        <div className='how-work'>
        <div className='how-work-img'>
        <img  className="how-work-image" alt="image" src={howworkB}/>
        </div>

        <div className='how-work-desc'>
          <h2>02.</h2>
           <h3>Select Your Items</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,</p>
<div className='how-work-desc-btn' >Add Your item</div>
        </div>
        </div>
        <div className='how-work'>
        <div className='how-work-desc'>
          <h2>03.</h2>
           <h3>Purchase Items</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,</p>
<div className='how-work-desc-btn' >Purchase item</div>
        </div>
        <div className='how-work-img'>
        <img  className="how-work-image" alt="image" src={howworkC}/>
        </div>
        </div>

      </div>
    
  );
};


export default HowItWork;

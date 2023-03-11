import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import "./style/auctionPage.css";
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';
import Card from '../components/Card';

// function HostelCard({hostels}){
//   const location=useLocation();
//   const navigate = useNavigate(); 
//   return hostels.map((hostel, index) =>{
//      return(
//      <div key={index} className="col-sm">
//   <div onClick={()=>{
//       console.log("click");
//       navigate("/hostel" ,{state:hostel});
//   }}>
//   <Cards data={hostel}/>
//   </div> 
//   </div>
//      )
//   });
 
// }





function AuctionPage(){
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

export default AuctionPage;
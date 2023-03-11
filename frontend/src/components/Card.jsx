import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import share from '../assets/share.svg';
import carrot from '../assets/carrot.jpeg';
import person from '../assets/personProfile.jpg';
import "./style/card.css";
import AuctionCounter from "../hooks/TimeRemaning"; 
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';

function Card(props){
//   const { user, logoutUser } = useGlobalContext();
console.log("props", props.data);
const timestamp = props.data.createdAt;
     const currentTimestamp = Date.now();;
     
     // Convert string timestamps to Date objects
     const date1 = new Date(timestamp);
     const date2 = new Date(currentTimestamp);
     
     // Calculate the difference in milliseconds
     const diffInMs = Math.abs(date2 - date1);
     
     // Convert milliseconds to hours
     const diffInHours = diffInMs / 3600000;
  return (
    <>
      
       <div className="card-container">
       <div className="card-image-container">
       <img  className="card-image-product" alt="image" src={carrot}/>
       <div className="card-image-timer">
        <div className="card-image-countdown">
            <h4>
            {props.data.biddingTime>diffInHours ? <AuctionCounter initialTime={props.data.biddingTime-diffInHours} /> : <p>bidding over</p> }
                {/* <span >2</span>
                H:&nbsp;
                <span >52</span>
                M:&nbsp;
                <span >50</span>
                S */}
            </h4>
        </div>
       </div>
       <div className='owner-area'>
        <div className="owner-emo">
            <img alt="owner-img" src={person}/>
        </div>
        <div className="owner-details">
            <span className="owner-name">Owner tom</span>
        </div>

       </div>
       </div>
       <div className="card-content">
       <h4>
       {props.data.name}
       </h4>
       <p className="card-content-bid-price">Bidding Price : <span> { props.data.finalBidAmt}</span> </p>
       <p className="card-content-bid-count">No of Bids: <span>{ props.data.no_of_bids}</span></p>

       <div className='card-bottom'>
       <div className='card-bid-btn'>Place Bid</div>
       <div className='card-social-share'>
       <div className="card-share-btn" >
       <img  className="card-image-share" alt="image" src={share}/>
       </div> 
        {/* <ul className="card-social-icons">
            <li>f</li>
            <li>i</li>
            <li>t</li>
            <li>l</li>
        </ul> */}

       </div>
        <div>

        </div>
       </div>
       </div>
       </div>
      
    </>
  );
};

export default Card;
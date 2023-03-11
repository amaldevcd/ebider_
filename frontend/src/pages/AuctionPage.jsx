import React from 'react';
import {useState,useEffect} from "react"
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import "./style/auctionPage.css";
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';
import Card from '../components/Card';
import {itemUrl} from "../url/url" 
import axios from '../api/axios';
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"

function ItemCard({items}){
  const location=useLocation();
  const navigate = useNavigate(); 
  //console.log("here items",items)
  return items.map((item, index) =>{
     return(
     <div key={index} className="col-sm">
     <div onClick={()=>{
     // console.log("click");
      navigate("/product/detail" ,{state:item});
  }}>
  <Card data={item}/>
  </div> 
  </div>
     )
  });
 
}





function AuctionPage(){
//   const { user, logoutUser } = useGlobalContext();
const [items, setItems] = useState([]);


useEffect(()=>{
  axios.get(itemUrl)
  .then(res=>{
   // console.log("res.data",res.data);
      setItems(res.data);
    //  console.log('user.firstName',user.lastName);
    //  setValues(res.data);
      //dataValues.current = res.data.hostel;
    }).catch(err=>{
      console.log(err)
      
    })
  },[])
   
  
  




  return (
    <>
    <div className='auction'>
    <div class="row">
    {
      // console.log(items)
      items.length > 0 ? <ItemCard items={items}/> : <p className="m-4 text-center w-100">No hostel data!</p>
      

    }
    </div>
      {/* <Card/>



      <Card/>
      <Card/> */}

    </div>
     
    </>
  );
};

export default AuctionPage;
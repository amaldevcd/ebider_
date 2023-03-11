import React from 'react';
import {useState} from 'react'
import "./style/dashboard.css";
import {
  Link,
  useNavigate,
  useLocation
} from 'react-router-dom';
import dashboard from '../assets/dashboard.svg';
import person from '../assets/person.svg';
import shoppingBag from '../assets/ShoppingBag.svg';
import paid from "../assets/paid.svg";
import logout from "../assets/Logout.svg";
import useAuth from "../hooks/useAuth";
import Profile from "../components/Profile";
import AddProduct from "../components/AddProduct";
import OrderTable from "../components/OrderTable";
import PurchaseTable from "../components/PurchaseTable";

function Dashboard (){
    const [selected,setSelected]=useState("dashboard");
    const {auth,setAuth}=useAuth();
    const navigate = useNavigate();
    //console.log(selected);
  return (
    <div className='Dashboard-page'>
      <div className='Dashboard-page-side-bar'>
      <div className= { selected==="dashboard" ? 'Dashboard-side-bar-component-selected' :'Dashboard-side-bar-component'}
      onClick={()=>{setSelected("dashboard")}}>
      <img  className="product-image" alt="image" src={dashboard}/>
      Add Product
      </div>
      <div className={ selected==="profile" ? 'Dashboard-side-bar-component-selected' :'Dashboard-side-bar-component'}
      onClick={()=>{setSelected("profile")}}>
      <img  className="product-image" alt="image" src={person}/>
      Profile
      </div>
      <div className={ selected==="order" ? 'Dashboard-side-bar-component-selected' :'Dashboard-side-bar-component'}
      onClick={()=>{setSelected("order")}}>
      <img  className="product-image" alt="image" src={shoppingBag}/>
      Ordered Biding
      </div>
      <div className={ selected==="purchase" ? 'Dashboard-side-bar-component-selected' :'Dashboard-side-bar-component'}
      onClick={()=>{setSelected("purchase")}}>
      <img  className="product-image" alt="image" src={paid}/>
      Purchase
      </div>
      <div className={ selected==="logout" ? 'Dashboard-side-bar-component-selected' :'Dashboard-side-bar-component'}
      onClick={()=>{setAuth(null)}}>
      <img  className="product-image" alt="image" src={logout}/>
      Logout
      </div>
      </div>



      <div className='Dashboard-page-body'>
      {selected === "dashboard" ?
        <AddProduct/>:<></>
      }
      {selected ==="profile" ?
      <Profile/> :<></>}
      {selected ==="order" ?
      <OrderTable/> :<></>}
      {selected ==="purchase" ?
      <PurchaseTable/> :<></>}
      </div>
    </div>
  );
};

export default Dashboard;

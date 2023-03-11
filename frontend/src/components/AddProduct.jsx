import React,{useState,useEffect} from 'react';
import plus from '../assets/Plus.svg';
//import React,{useState,useEffect} from 'react';
//import plus from '../assets/plus.svg';
import PopUp from './PopUp';
import axios from "axios";
import ItemBar from "./ItemBar"
import {allItemUrl} from "../url/url";
import useLocalStorageRef from "../hooks/LocalStorage";
import "./style/addProduct.css";
function AddProduct ({ image, name, price, time}){
    const [items, setItems] = useState([]);
   const itemsData=[
        {name :"carrort",date:"21-07-2022"},
        {name :"carrort",date:"21-07-2022"},
        {name :"carrort",date:"21-07-2022"},
]
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [userData, setUserData, removeUserData] = useLocalStorageRef("user");
  useEffect(()=>{
    axios.get(allItemUrl+`/${userData.current._id}`)
    .then(res=>{
      console.log("res.data",res.data);
        setItems(res.data);
        console.log('user.firstName',user.lastName);
        setValues(res.data);
        //dataValues.current = res.data.hostel;
      }).catch(err=>{
        console.log(err)
        
      })
    },[buttonPopUp])






  return (<>
   <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} onAdd={(data) => setItems(curr_data => [...curr_data, data])} />
      
      <div className="item-list" id="myTabContent">
                  <div className="item-list-header">
                    <h4>Items</h4>
                    <div
                      className="item-list-header-add-plus"
                      onClick={() => {
                        console.log("here");
                        setButtonPopUp(true);
                      }}
                    >
                     <img  className="card-image-product" alt="image" src={plus}/>
                    </div>
                  </div>
                  <div className="items-box-container">         
                   {
                     items.map((item, index) => (
                      <ItemBar key={index} data={item} onDelete={() => setHostels(curr_data => curr_data.filter((data, idx) => idx !== index)) } />
                     ))
                   }
                  </div>
      
    </div>
    </>
  )}


export default AddProduct;

import React,{useState} from 'react';
import plus from '../assets/plus.svg';
import PopUp from './PopUp';
import ItemBar from "./ItemBar"
import "./style/addProduct.css";
function AddProduct ({ image, name, price, time}){
    const [items, setItems] = useState([]);
   const itemsData=[
        {name :"carrort",date:"21-07-2022"},
        {name :"carrort",date:"21-07-2022"},
        {name :"carrort",date:"21-07-2022"},
]
  const [buttonPopUp, setButtonPopUp] = useState(false);

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
                     itemsData.map((itemData, index) => (
                      <ItemBar key={index} data={itemData} onDelete={() => setHostels(curr_data => curr_data.filter((data, idx) => idx !== index)) } />
                     ))
                   }
                  </div>
      
    </div>
    </>
  )}


export default AddProduct;

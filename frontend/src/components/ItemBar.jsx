import "./style/itemBar.css";
//import { BsFillPencilFill,BsFillTrashFill } from "react-icons/bs"
import axios from "axios";
import edit from '../assets/Edit.svg';
import Delete from '../assets/Delete.svg';
// /import {hostelDeleteUrl} from "../url/url";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuctionCounter from "../hooks/TimeRemaning"; 

function ItemBar(props) {
     console.log("props.createdAt",props.data);
     const navigate = useNavigate();
     const location = useLocation();
     const timestamp = props.data.createdAt;
     const currentTimestamp = Date.now();;
     
     // Convert string timestamps to Date objects
     const date1 = new Date(timestamp);
     const date2 = new Date(currentTimestamp);
     
     // Calculate the difference in milliseconds
     const diffInMs = Math.abs(date2 - date1);
     
     // Convert milliseconds to hours
     const diffInHours = diffInMs / 3600000;
    return(<>

        <div className="hostel-bar">
             <p className="hostel-bar-text">{props.data.name}</p>
             {props.data.biddingTime>diffInHours ? <AuctionCounter initialTime={props.data.biddingTime-diffInHours} /> : <p>bidding over</p> }
             <div className="icon-container">
             <div className="edit-pencil" 
             onClick={()=>{
                    console.log("props.data...");
                    //navigate("",{state:props.data});
             }}>     
               <img  className="card-image-product" alt="image" src={edit}/></div>
             <div className="delete-bin"
               onClick={async () => {
                    try {
                      const response = await axios.delete(
                        hostelDeleteUrl + `/${props.data._id}`,
                        {
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                          },
                          withCredentials: true,
                        }
                      );
                      console.log(response.data);
                      console.log("Deleted Successfully!");
                      props?.onDelete();
                    } catch (err) {
                      console.log(err);
                      if (err.response?.status == 409) {
                        console.log("Username not deleted");
                      } else if (err?.response) {
                        console.log(!err?.response);
                        console.log("no server response");
                      } else {
                        console.log("Failed to delete");
                        setError("Failed to delete");
                        console.error(err);
                      }
                    }
                  }}><img  className="card-image-product" alt="image" src={Delete}/></div>
             </div>
             
        </div>
        
    </>
        )


}

export default ItemBar;
import Item from '../models/Item.js';
import Token from '../models/Token.js';
import { StatusCodes } from 'http-status-codes';
import CustomError from '../errors/index.js' ;
import dotenv from "dotenv"

dotenv.config();
const itemAdd = async (req, res) => {
  console.log("herein item",req.body);
  const { name,quantity,_id_owner,smallDescription,initialBidAmt,biddingTime,detailDescription,finalBidAmt,no_of_bid,img1_url,img2_url,img3_url} = req.body;
 

  
  const item = await Item.create({
    name,quantity,_id_owner,smallDescription,initialBidAmt,biddingTime,detailDescription,finalBidAmt,no_of_bid,img1_url,img2_url,img3_url
  });
  const origin = 'http://localhost:3000';

 
 console.log("here",item);

  res.status(StatusCodes.CREATED).json({
    msg: 'Success! added the item'
    ,item:{name:item.name,_id_owner:item._id_owner,smallDescription:item.smallDescription,initialBidAmt:item.initialBidAmt,biddingTime:item.biddingTime,detailProductDescription:item.detailProductDescription,finalBidAmt:item.finalBidAmt,no_of_bid:item.no_of_bid,img1_url:item.img1_url,img2_url:item.img2_url,img3_url:item.img3_url}, errors: []
  });
 };




 const allItemFetch = async (req, res) => {
    try{ 
     // console.log("update here",req.body);
        const userId=req.params.id;
        console.log("userId",userId);
        let items = await Item.find({_id_owner:userId});
      
        console.log(items);
      
      
        if(!items)
        {
          throw new Error("No items found");
        }
        // else{
        //   const userData={
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     email: user.email,
        //     phoneNumber: user.phoneNumber,
        //     address: user.address,
        //     city: user.city,
        //     state: user.state,
        //     country: user.country,
        //     zipCode: user.zipCode
            
          //}
          return res.status(200).json(items);
            
        //}
       }
       catch (err)
       {
        res.status(400).json({errors:[{msg: err.message}]});
       }
      
    }








 export {
    itemAdd,
    allItemFetch,
  };
  
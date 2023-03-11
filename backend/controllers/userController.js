import {response, Router} from "express";
import {check,validationResult} from "express-validator";
const UserRouter = Router();
import bcrypt from "bcrypt";
import User from "../models/User.js"
import { MongoClient, ObjectId } from 'mongodb';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import auth from "../Middleware/auth.js";


dotenv.config();

const userfetch = async (req, res) => {
    try{ 
     // console.log("update here",req.body);
        const userId=req.params.id;
        let user = await User.findById(userId);
      
        //console.log(user);
      
      
        if(!user)
        {
          throw new Error("User not found!");
        }
        else{
          const userData={
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
            city: user.city,
            state: user.state,
            country: user.country,
            zipCode: user.zipCode
            
          }
          return res.status(200).json(userData);
            
        }
       }
       catch (err)
       {
        res.status(400).json({errors:[{msg: err.message}]});
       }
      
    }

    const userUpdate = async (req, res) => {
      console.log("req",req.params.id);
      const{firstName, lastName,email,phoneNumber,address,city,state,country,zipCode} = req.body
      const query = { _id: new ObjectId(req.params.id) };
      console.log("query",query)
      console.log(firstName, lastName, email, phoneNumber,address,city,state,country,zipCode);
      const update = {
        $set: {
          firstName,
          lastName,
          phoneNumber,
          address,
          city,
          state,
          country,
          zipCode
        }
      };
      const options = { upsert: false };// set to true if you want to insert a new document if no documents match the filter 
      const user=await User.updateMany( query,update,options);
        console.log("user",user);
        res.status(202).json({msg: "user updated", errors: []})
       //}
       //);
      }
     








//UserRouter.get('/:id',async(req, res) => {
//     try{ 
//      const userId=req.params.id;
//      let user = await User.findById(userId);
   
//      console.log(user);
   
   
//      if(!user)
//      {
//        throw new Error("User not found!");
//      }
//      else{
//        const userData={
//          firstName: user.firstName,
//          lastName: user.lastName,
//          email: user.email,
//          phoneNumber: user.phoneNumber,
//          address: user.address,
//          city: user.city,
//          state: user.state,
//          country: user.country,
//          zipCode: user.zipCode
         
//        }
//        return res.status(200).json(userData);
         
//      }
//     }
//     catch (err)
//     {
//      res.status(400).json({errors:[{msg: err.message}]});
//     }
//    });
   
   
   export {
    userfetch,
    userUpdate,
  };
  
   
   
   
  // export default UserController;
import {response, Router} from "express";
import {check,validationResult} from "express-validator";
const UserRouter = Router();
import bcrypt from "bcrypt";
import User from "../models/User.js"

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import auth from "../Middleware/auth.js";


dotenv.config();

const userfetch = async (req, res) => {
    try{ 
        const userId=req.params.id;
        let user = await User.findById(userId);
      
        console.log(user);
      
      
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
    
  };
  
   
   
   
  // export default UserController;
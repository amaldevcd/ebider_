
import mongoose from 'mongoose';
const db=mongoose
.connect("mongodb://localhost:27017/ebidderDB")
.then(() => console.log("Connected to database"))
.catch((err) => console.error("Could not connect to database", err));


// db.connect((error) => {
//     if(!error)
//     console.log('Connection has been established successfully.');
   
//     else
//     console.error('Unable to connect to the database: ', error);
//   });


export default db;

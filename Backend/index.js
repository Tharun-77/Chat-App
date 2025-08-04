//Importing all the required modules 
import express from 'express'
import dotenv from 'dotenv'
import { chats } from './data/data.js';
import cors from 'cors';

//Intitialzing express and .env
dotenv.config({quiet:true});
const app = express();

//Connecting Backend and frontend without cors error 
//*** Remember don't give a trailing / in origin ***
app.use(cors({
    origin:'http://localhost:5173',
}));

//Assigning Port Number
const port =process.env.PORT || 5000

//Intilizing REST api
app.get('/',(req,res)=>{
    res.send("chats")
})
app.get('/api',(req,res)=>{
    
    res.send(chats)
})
app.get('/api/chat/:id',(req,res)=>{
    const id = req.params.id;
    let ans ="";
    for(let i=0;i<chats.length;i++){
        if(chats[i]._id === id){
            ans = chats[i];
            break;
        }
    }
    res.send(ans)
})

//Listening on port from env
app.listen(port,(req,res)=>{
    console.log(`server is listening on port : ${port}`);
})
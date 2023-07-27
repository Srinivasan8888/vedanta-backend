import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import sensorRoute from "./api/routes/sensor.js";
// import bcrypt from 'bcryptjs';
const app = express();

const connect = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/vedanta');
        console.log('Mongodb Connected..');
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected',()=>{
    console.log('Mongodb disconnected...');
});

//middlewares
//for json
app.use(express.json());
//Enable CORs for all routes
app.use(cors());

app.use('/sensor',sensorRoute);

app.listen(4000,()=>{
    connect();
    console.log('Server Started..');
});
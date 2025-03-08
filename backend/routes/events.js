const express = require("express");
const router=express.Router();

const Events=require("../models/Events");

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth()+1;
if (month < 10) month = "0" + month;
var day = currentDate.getDate();
if (day < 10) day = "0" + day;
currentDate = year + "-" + month + "-" + day;

router.get("/", async(req,res) => {
    try{
        const events = await Events.find();
        res.json(events);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

router.post("/", async(req,res)=>{
    try{
        const {eventId, name, date, aviableSeats}=req.body;
        if(aviableSeats>0&&date>=currentDate){
            const newEvent=new Events({eventId, name,date,aviableSeats});
            await newEvent.save();
            res.status(201).json(newEvent);
            
        }else{
            res.status(401).json("No se puede ingresar 0 asientos o poner una fecha anterior");
        }
    }catch(err){
        res.status(500).json({error: err.message});
    }
})

module.exports=router;
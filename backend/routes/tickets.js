const express = require("express");
const router=express.Router();

const Ticket=require("../models/Ticket");

router.get("/", async(req,res) => {
    try{
        const tickets = await Ticket.find();
        res.json(tickets);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

router.post("/", async(req,res)=>{
    try{
        const {ticketId, userId, eventId}=req.body;
        const newTicket=new Ticket({ticketId, userId, eventId});
        await newTicket.save();
        res.status(201).json(newTicket);
    }catch(err){
        res.status(500).json({error: err.message});
    }
})


router.delete("/:id", async (req, res) => {
    try {
        if(Ticket.exists){
            await Ticket.findByIdAndDelete(req.params.id);
            res.json({ message: "Ticket eliminado" });
        }else{
            res.status(404).json("No existe el ticket");
        }
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports=router;
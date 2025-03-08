const mongoose=require("mongoose");
const ticketSchema=new mongoose.Schema({
    tickedId:{type:Number, required:true},
    userId:{type:Number, required:true},
    eventId:{type:Number, required:true}
})

module.exports=mongoose.model("Ticket",ticketSchema);
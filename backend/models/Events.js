const mongoose=require("mongoose");
const eventSchema=new mongoose.Schema({
    eventId:{type:Number, required:true},
    name:{type:String, required:true},
    date:{type:Date, required:true},
    aviableSeats:{type:Number, required:true}
})

module.exports=mongoose.model("Events",eventSchema);
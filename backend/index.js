const express= require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT||5001;

app.use(cors());
app.use(express.json());

const eventRoutes=require("./routes/events");
app.use("/events",eventRoutes);
const ticketRoutes=require("./routes/tickets");
app.use("/tickets",ticketRoutes);


mongoose
.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("Conectando"))
.catch((err)=>console.error("Error: ",err));

//app.use("/users", userRouter);
app.get("/", (req, res)=>{
    res.send("Corriendo server");
})

app.listen(PORT,()=>{
    console.log(`Servidor http://localhost:${PORT}`)
});


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const inventoryRouter= require("./router/inventoryRoutes");
const customerRouter= require("./router/customerRoutes");
const orderRouter= require("./router/orderRouter");

const app = express();
dotenv.config();
app.use(bodyParser.json());
const port = process.env.PORT || 3005


mongoose.connect(process.env.DATABASE_URL,(err)=>{
    if(!err){
        console.log("connected to database");
    }
});

app.use("/",inventoryRouter);
app.use("/",customerRouter);
app.use("/",orderRouter);



app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})
const express = require("express");
const customerModel = require("../models/customerTableModel/customerModel")

const customerRouter = express.Router();

customerRouter.post("/createCustomer",async(req,res)=>{
    try{
        const customerDetails = await customerModel.create(req.body);

        res.status(200).json({
            status:"success",
            customerDetails
        })
      
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        });
    }
});

customerRouter.get("/customerDetails",async(req,res)=>{
    try{
        const customerDetails = await customerModel.find();

        res.status(200).json({
            status:"success",
            customerDetails
        })
      
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        });
    }
});

module.exports = customerRouter;
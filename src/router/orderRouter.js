const express = require("express");
const orderModel = require("../models/orderTableModel/orderModel");

const orderRouter = express.Router();

orderRouter.post("/createOrders",async(req,res)=>{
    try{
        const createOrders = await orderModel.create(req.body);

        res.status(200).json({
            status:"success",
            createOrders
        })
      
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        });
    }
});

orderRouter.get("/orders",async(req,res)=>{
    try{
        const orders = await orderModel.find();

        res.status(200).json({
            status:"success",
            orders
        })
      
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        });
    }
});

module.exports = orderRouter;
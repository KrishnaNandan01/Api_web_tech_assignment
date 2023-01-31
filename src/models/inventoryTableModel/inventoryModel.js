const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    inventory_type :{type:String,required:true},
    item_name :{type:String,required:true},
    available_quantity :{type:Number,required:true},

});

const inventoryTable = mongoose.model("inventoryTable",inventorySchema);

module.exports = inventoryTable ;

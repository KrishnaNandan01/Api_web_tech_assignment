const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customer_name :{type:String,required:true},
    email :{type:String,required:true},
});

const customerTable = mongoose.model("customerTable",customerSchema);

module.exports = customerTable ;

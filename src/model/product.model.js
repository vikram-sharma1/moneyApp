
const mongoose = require("mongoose")


const productShema = new mongoose.Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true},
    review_id:[{type:mongoose.Schema.Types.ObjectId,ref:"review",required:true}]

},{
timestamps:true,
versionKey:false
})

module.exports =  mongoose.model("product",productShema)
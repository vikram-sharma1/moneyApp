
const mongoose = require("mongoose")


const reviewShema = new mongoose.Schema({
    userId:{type:Number,require:true},
    description:{type:String,require:true},

},{
timestamps:true,
versionKey:false
})

module.exports =  mongoose.model("review",reviewShema)
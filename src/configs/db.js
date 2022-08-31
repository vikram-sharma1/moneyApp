
const mongoose = require("mongoose")


module.exports = ()=>{
    return mongoose.connect("mongodb+srv://moneyApp:moneyApp@cluster0.lroptme.mongodb.net/?retryWrites=true&w=majority")
}





const express = require("express")
const connect = require("./src/configs/db")
const ProductController = require("./src/controller/product.controller")
const ReviewController = require("./src/controller/review.controller")

const app = express()

app.use(express.json())

app.use("/product",ProductController)
app.use("/review",ReviewController)

const port = process.env.PORT || 8080

app.listen(port,async()=>{
    await connect()
    console.log("listening on 8080")
})
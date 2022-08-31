

const express = require("express")
const Rev = require("../model/review.model")
const router = express.Router()





router.post("",async(req,res)=>{
    const product = await Rev.create(req.body)
    return res.status(200).send(product)
})



router.delete("/:id",async(req,res)=>{
    const {id} = req.body
    const product = await Rev.findByIdAndDelete(id).lean().exec()
    return res.status(200).send(product)
})



module.exports = router

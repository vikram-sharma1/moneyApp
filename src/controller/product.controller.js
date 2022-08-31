

const express = require("express")
const Prod = require("../model/product.model")
const router = express.Router()



router.get("",async(req,res)=>{
    const product = await Prod.find().populate("review_id").lean().exec()
    return res.status(200).send(product)
})

router.post("",async(req,res)=>{
    const product = await Prod.create(req.body)
    return res.status(200).send(product)
})


router.get("/:id",async(req,res)=>{
    const {id} = req.body
    const product = await Prod.findById(id).lean().exec()
    return res.status(200).send(product)
})


router.patch("/:id",async(req,res)=>{
    const {id} = req.body
    const product = await Prod.findByIdAndUpdate(id,req.body,{new:true}).lean().exec()
    return res.status(200).send(product)
})

router.delete("/:id",async(req,res)=>{
    const {id} = req.body
    const product = await Prod.findByIdAndDelete(id).lean().exec()
    return res.status(200).send(product)
})

module.exports = router



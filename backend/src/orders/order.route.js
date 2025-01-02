const express=require('express');

const router=express.Router();

const {createAOrder,getOrderByEmail}=require('./order.controller')
//create order endpoint

router.post("/",createAOrder);

//get orders by email

router.get("/email/:email",getOrderByEmail)

module.exports=router;
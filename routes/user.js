const express = require('express');
const usercontroller=require('../controller/usercontroller');
const router=express.Router();


router.get('/users',(req,res)=>{
   usercontroller.getALLUser(req,res);
})
router.get('/user/:id',(req,res)=>{
    usercontroller.getUser(req,res)
})
module.exports=router;
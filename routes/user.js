const express = require('express');
const usercontroller=require('../controller/usercontroller');
const router=express.Router();


router.get('/users',(req,res)=>{
   usercontroller.getALLUser(req,res);
})

module.exports=router;
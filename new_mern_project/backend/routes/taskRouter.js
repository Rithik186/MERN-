const express=require('express')
const router=express.Router()

const {Task}=require('../controller/taskControllers')
router.post('/newtask',Task)
module.exports=router
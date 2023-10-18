const express=require('express')
const logic=require('../controllers/logic')


const router=new express.Router()

router.post('/newsData/add',logic.add)


module.exports=router
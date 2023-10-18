const express=require('express')
require('dotenv').config()
const cors=require('cors')
const router=require('./routes/userRouting')
require('./db/dbConnections')

const server=express()
server.use(cors())
server.use(express.json())
server.use(router)


const port=3000||process.env.port

server.listen(port,()=>{
    console.log(`____server started at port number ${port}____`);
})
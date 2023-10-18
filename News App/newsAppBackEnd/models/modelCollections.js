const mongoose=require('mongoose')


const admins=new mongoose.model("admins",{
    email:String,
    name:String,
    psw:String
})

const datas=new mongoose.model("datas",{
    title:String,
    image:String,
    content:String

})

module.exports=admins
module.exports=datas
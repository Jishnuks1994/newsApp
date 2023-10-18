const  admins=require("../models/modelCollections")
const datas=require("../models/modelCollections")

const add=(req,res)=>{
    const {title,image,content}=req.body

    datas.findOne({title}).then(data=>{
        if(data){
            res.status(401).send("news already added")
        }
        else{
            var newNews= new datas({
                title,
                image,
                content
            })
            newNews.save()
            res.status(200).json(newNews)
        }
    })
}

module.exports={add}
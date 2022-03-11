const express=require("express");
const router=express.Router();
const db=require("../models")

//POST NEWPOST
router.post("/new",(req,res)=>{
    db.Post.create({
        text:req.body.text,
        id:req.body.id
    }).then(newPost => res.send(newPost));
    });
    

    //GET POST DETAILS
    router.get("/find/:id",(req,res) =>{
        db.Post.findAll({
        where:{ id:req.params.id },
        include:[db.User]
    }).then(post=>res.send(post));
    });

    //DELETE POST DETAILS
    router.delete("/delete/:id",(req,res)=>{
        db.Post.destroy({
            where:{
                id:req.params.id
            }
        }).then((deletePost)=>res.send(deletePost));
    });

   //UPDATE POST DETAILS
    router.put("/edit",(req,res)=>{
        db.Post.update({
            where:{
                id:req.params.id
            }
        }).then((updatePost)=>res.send(updatePost));
    })

module.exports=router;
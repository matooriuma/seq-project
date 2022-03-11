const express=require("express");
const router=express.Router();
const db=require("../models")
//POST NEWUSER
router.post("/new",(req,res)=>{
   db.User.create({
       username:req.body.username
   }).then(newUser=>res.send(newUser));
})

//GET USER DETAILS
router.get("/all",(req,res)=>{
    db.User.findAll({
        include:[db.Profile,db.Post]
    }).then(allUsers => res.send(allUsers));
});

//DELETE USER DETAILS
router.delete("/delete/:id",(req,res)=>{
     db.User.destroy({
         where:{
             id:req.params.id
         }
     }).then((deleteUser)=>res.send(deleteUser));
})

//UPDATE USER DETAILS
router.put("/edit",(req,res)=>{
    db.User.update({
        where:{
            id:req.params.id
        }
    }).then((updateUser)=>res.send(updateUser));
})

module.exports=router;
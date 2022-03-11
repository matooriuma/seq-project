const express=require("express");
const router=express.Router();
const db=require("../models");

//POST NEWPROFILE
router.post("/new",(req,res)=>{
db.Profile.create({
    profileName:req.body.profileName,
     id:req.body.id
}).then(newProfile => res.send(newProfile));
});

//GET PROFILE DETAILS
router.get("/find/:id",(req,res) =>{
    db.Profile.findAll({
    where:{ id:req.params.id },
    include:[db.User]
}).then(profile=>res.send(profile));


//DELETE PROFILE DETAILS
router.delete("/delete/:id",(req,res)=>{
    db.Profile.destroy({
        where:{
            id:req.params.id
        }
    }).then((deleteProfile)=>res.send(deleteProfile));
})


//UPDATE PROFILE DETAILS
router.put("/edit",(req,res)=>{
    db.Profile.update({
        where:{
            id:req.params.id
        }
    }).then((updateProfile)=>res.send(updateProfile));
})

});
module.exports=router;
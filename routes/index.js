const express=require('express')
const routes=express.Router();
const db=require("../models");
const user=require('./user')

routes.use('/user',user);
module.exports=routes;
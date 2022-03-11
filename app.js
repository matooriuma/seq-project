const express = require("express");
const routes=require("./routes/index");
const db=require("./models");
require('dotenv').config();
const app = express();
const port=process.env.PORT||4000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",routes)
app.get('/',(req,res)=>{
    res.send("Good morning!")
})

const userRoutes=require("./routes/user-routes");
app.use("/api/users",userRoutes);

const profileRoutes=require("./routes/profile-routes");
app.use("/api/profiles",profileRoutes);

const postRoutes=require("./routes/post-routes");
const router = require("./routes/user");
app.use("/api/post",postRoutes);


db.sequelize.sync().then(()=>{
  app.listen(port,()=>{
    console.log(`listening at:http://localhost:${port}`);
  });
});
module.exports=routes;

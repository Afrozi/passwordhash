const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
require("./db/connect");
const playlistschema = require("./model/model");
const staticpath = path.join(__dirname,"../template/views");
app.set("views",staticpath);
app.set("view engine","hbs");
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render("sign");
});

app.post("/empdata",async (req,res)=>{
    const password = req.body.password;
    const cpasword = req.body.cpassword;
    if (password === cpasword) {
          const postdata = new playlistschema({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            cpassword:req.body.cpassword,
          });
          const getdata = await postdata.save();
          res.render('sign');
    }else{
        res.send("password are not matching....");
    }
});

app.listen(port,()=>{
    console.log('connected');
});
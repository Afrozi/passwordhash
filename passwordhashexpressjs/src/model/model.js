const mongoose = require("mongoose");
const playlist = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:Boolean,
    },
    password:{
        type:String,
        require:true,
    },
    cpassword:{
        type:String,
        require:true,
    },
});
const bcrypt = require("bcrypt");
playlist.pre('save',async function(next){
    // console.log(this.password);
    this.password = await bcrypt.hash(this.password,10)
    next();
    this.cpassword = undefined;
})

const playlistschema = new mongoose.model("shivgamidevi",playlist);
module.exports = playlistschema;
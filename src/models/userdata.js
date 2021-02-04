const mongoose = require('mongoose');
var validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!(validator.isEmail(value))){
                throw new Error("Invalid Email.....");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minlength:3
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User = new mongoose.model("User",userSchema);

module.exports = User;
const mongoose= require("mongoose");
const validator=require("validator");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        minLength:2
    },
    email:{
        type:String,
        validate(value){
            if(!valiadtor.isEmail(value)){
                throw new Error("Invalid Email")
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
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }

})

const User=mongoose.model("User",userSchema);
module.exports= User;

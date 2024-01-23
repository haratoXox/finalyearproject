import { Schema, model, models } from "mongoose";

const Userschema  = new Schema({
    clearkId:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    photo:{type:String,required:true},
})

const User = models.User || model('User',Userschema);

export default User;

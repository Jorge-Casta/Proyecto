import mongoose, { Schema } from "mongoose";

const productySchema = new mongoose.Schema ({

    displayname:{
        type:String,
        required:true,
        trim: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        match: 
    }
    hashPasword: {

        type: String,
        required:true,
        trim: true,
    }
    role:{
        type:String,
        required:true,
        enum: ['admin', 'customer', 'guest'],
        trim: true,
    }
    avatar:{
         type:String,
        default:'https://placehold.co/100x100.png',
        trim: true,
    }
    phone:{
        type: String,
        required:true,
        max: 10
    }
    isActive:{
        type: Boolean,
        required:true,
    }
    });
    
    const User = mongoose.model ('User', usertSchema);
    
    module.exports = User;
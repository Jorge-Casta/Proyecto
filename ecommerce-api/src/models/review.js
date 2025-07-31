import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema ({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: True,
    },
    product:{
        type:String,
        required:true,
        trim: true,
    }
    rating:{
        type:Number,
        required:true,
    }
    comment{

        type:String,
        max: 500,
    },
    });
    
    const review = mongoose.model ('Review', usertSchema);
    
    module.exports = Review;
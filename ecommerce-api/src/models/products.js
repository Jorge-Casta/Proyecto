import mongoose, { Schema } from "mongoose";

const productySchema = new mongoose.Schema ({

    name:{
        type:String,
        required:true,
        trim: true,
    },
    description: {
        type:String,
        required:true,
        trim: true,
    },
    price:{
        type:Number,
        required: 1,
        min:1,
    },
    stock:{
        type: Number,
        required: true,
        min: 0,
    },
    imageURL: {
        type:String,
        default:'https://placehold.co/800x600.png',
        trim: true,
    },
   category:{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
    trim: true,
   
    }
    });
    
    const product = mongoose.model ('Product', productSchema);
    
    module.exports = Product;
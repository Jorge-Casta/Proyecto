import mongoose from "mongoose";

const shippingAddressSchema = new mongoose.Schema ({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    address:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    postalCode:{
        type: String,
        required: true,
        min: 4,
        max: 6,
    },

    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
             addedAt:{

                type: Date,
                default: Date.now,
                  },     
    }
    ]

});

const ShippingAddress = mongoose.model ('ShippingAddress', shippingAddressSchema);

module.exports = ShippingAddress;
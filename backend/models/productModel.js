import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        red:"User"
    },
    name:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
},{
    timestamps:true
})
const productSchema = new mongoose.Schema({
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:"User"
    // },
    imgSrc: String,
    title: String,
    description: String,
    products: Number,
    category: String,
    brand:String
},
{
    timestamps:true
});

const Product = mongoose.model("Product", productSchema);

export default Product;
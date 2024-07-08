// import express from 'express'
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// dotenv.config();
// import connectDB from './config/db.js';
// import { notFound,errorHandler } from './middleware/errorMiddleware.js';
// import productRoutes from './routes/productRoutes.js'
// import userRoutes from './routes/userRoutes.js'


// const port=process.env.PORT || 5000;

// connectDB();    //Connect to MongoDB

// const app = express();

// //Body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// //Body parser middleware
// app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send('API is running...');
// })
// app.use('/api/products',productRoutes);
// app.use('/api/users',userRoutes);

// app.use(notFound);
// app.use(errorHandler); 

// app.listen(port, () => console.log(`Server running on port ${port}`))


// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// const dotenv = require('dotenv');
// dotenv.config();
// const connectDB = require('./config/db')

// connectDB();



// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb+srv://danielmendez9310:tonckaA13@cluster0.9yyr0pp.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
    imgSrc: String,
    title: String,
    description: String,
    products: Number,
    category: String,
    brand:String
});

const Product = mongoose.model('Product', productSchema);

// API Routes
app.get('/', (req, res) => {
    res.send('API is running...');
})
app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

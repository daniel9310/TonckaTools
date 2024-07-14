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
const tools = [
    { id: 1, name: 'Team Workspace', description: 'Team Workspace Description', location: 'California, USA', price: '300$', capacity: '24', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Coworking Workspace', description: 'Coworking Workspace Description', location: 'California, USA', price: '300$', capacity: '24', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Meeting Office Space', description: 'Meeting Office Space Description', location: 'London, Canary Wharf, UK', price: '50$', capacity: '2-4', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Conference Room', description: 'Conference Room Description', location: 'Paris, Île-de-France, France', price: '150$', capacity: '50', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Lifestyle Space', description: 'Lifestyle Space Description', location: 'Madrid, Hortaleza, Spain', price: '200$', capacity: '30', image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Private Space', description: 'Private Space Description', location: 'New York, Manhattan, USA', price: '400$', capacity: '2', image: 'https://via.placeholder.com/300' },
  ];
  
  app.get('/api/tools', (req, res) => {
    res.json(tools);
  });
  
  app.get('/api/tools/:id', (req, res) => {
    const tool = tools.find(t => t.id === parseInt(req.params.id));
    if (tool) {
      res.json(tool);
    } else {
      res.status(404).send('Tool not found');
    }
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

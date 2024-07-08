// backend/populate.js
//You can create a script to populate your MongoDB with initial product data
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/toncka-tools', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const productSchema = new mongoose.Schema({
//     imgSrc: String,
//     title: String,
//     description: String,
//     products: Number,
//     category: String,
//     brand:String

// });

// const Product = mongoose.model('Product', productSchema);

// const products = [
//     { imgSrc: imgTools, title: 'Baterias Milwaukee', description: 'High-quality stereo systems', products: 17, category:['batteries', 'charger'],brand:'Milwauke' },
//     { imgSrc: imgTools2, title: 'Home Theatre', description: 'Immersive home theatre experience', products: 12 },
//     { imgSrc: imgTools3, title: 'Bluetooth Speakers', description: 'Portable and powerful', products: 8 },
//     { imgSrc: imgTools4, title: 'Headphones', description: 'Comfortable and clear sound', products: 8 },
//     { imgSrc: 'path/to/speakers.jpg', title: 'Speakers', description: 'High-fidelity speakers', products: 0 },
// ];

Product.insertMany(products)
    .then(() => {
        console.log('Products added successfully');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error adding products:', err);
        mongoose.connection.close();
    });

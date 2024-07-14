// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CarrouselTools from '../components/CarrouselTools'
import ContactUs from './ContactUs';
import axios from 'axios';



import imgTools from '../assets/img1.jpeg';
import imgTools2 from '../assets/img2.jpeg';
import imgTools3 from '../assets/img3.jpeg';
import imgTools4 from '../assets/img4.jpeg';

const products = [
    { imgSrc: imgTools, title: 'Baterias Milwaukee', description: 'High-quality stereo systems', products: 17, category:['batteries', 'charger'],brand:'Milwauke' },
    { imgSrc: imgTools2, title: 'Home Theatre', description: 'Immersive home theatre experience', products: 12,category:['batteries', 'charger','drill'] },
    { imgSrc: imgTools3, title: 'Bluetooth Speakers', description: 'Portable and powerful', products: 8,category:['battery', 'charger','impact wrench'] },
    { imgSrc: imgTools4, title: 'Headphones', description: 'Comfortable and clear sound', products: 8 },
    { imgSrc: 'path/to/speakers.jpg', title: 'Speakers', description: 'High-fidelity speakers', products: 0 },
];

const HomePage = () => {
    // const [products,setProducts] = useState([]);

    // useEffect( () => {
    //     axios.get('http://localhost:3000/api/products')
    //         .then((response) => {
    //             setProducts(response.data)
    //         }).catch((err) => {
    //             console.log('There was an error fetching the products!', err)
    //         });
    // })
    return (
        <>
            <NavigationBar />
            <CarrouselTools />
            <Hero />
            <Container className="my-5  justify-content-center align-items-center  h-100">
                <h2 className="text-center mb-4">Our Tools</h2>
                <Row>
                    {products.map((product, index) => (
                        <Col md={4} key={index}>
                            <ProductCard
                                imgSrc={product.imgSrc}
                                title={product.title}
                                description={product.description}
                                products={product.products}
                                category={product.category}
                                brand={product.brand}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <ContactUs/>
        </>
    );
}

export default HomePage;

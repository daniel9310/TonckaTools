// src/components/ProductCard.js
import React, { isValidElement } from 'react';
import { Card } from 'react-bootstrap';
import '../style/Card.css'

const ProductCard = ({ imgSrc, title, description, products,category,brand }) => {
    return (
        <Card className="mb-4 text-center ">
            <Card.Img variant="top" src={imgSrc}   />
            <Card.Body>
                <Card.Link href='#'>
                    <Card.Title>{title}</Card.Title>
                </Card.Link>   
                { typeof(brand)  === 'string'  ? (<Card.Text>{brand}</Card.Text>) : <div></div>}
                {/* { brand.count > 1 ? (<Card.Text>Categoria: {category}</Card.Text> ) : <div></div>} */}
                   
                    
                          
                <Card.Text>{description}</Card.Text>
                <Card.Text><small className="text-muted">{products >= 1 ? products+" Products" : <div >Sin Existencia</div> }</small></Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;

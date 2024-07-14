// src/components/ProductCard.js
import React, { isValidElement } from 'react';
import { Badge, Card, Stack } from 'react-bootstrap';
import '../style/Card.css'

const ProductCard = ({ imgSrc, title, description, products,category,brand }) => {
    return (
        <Card className="my-3 p-3 rounded mb-4 text-center ">
            <Card.Img variant="top" src={imgSrc}   />
            <Card.ImgOverlay >
                <Stack direction='' gap={1} className='col-md-3 '  > 
                    {
                    Array.isArray(category)   ? (
                        category.map((badge,i) => (                        
                            <Badge key={i} pill bg='success' fluid>{badge}</Badge>
                        ))
                    ) : (
                        <div></div>
                    )
                    }
                    {}              
                </Stack>
                { typeof(brand)  === 'string'  ? (<Card.Subtitle id='cardLabel' >{brand}</Card.Subtitle>) : <div></div>}
                {/* {  brand.count > 1 ? (<Card.Text>Categoria: {category}</Card.Text> ) : <div></div>}} */}
                    
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Link href='#'>
                    <Card.Title>{title}</Card.Title>
                </Card.Link>                   
                {/* { brand.count > 1 ? (<Card.Text>Categoria: {category}</Card.Text> ) : <div></div>} */}              
                          
                <Card.Text>{description}</Card.Text>
                <Card.Text><small className="text-muted">{products >= 1 ? products+" Products" : <div >Sin Existencia</div> }</small></Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;

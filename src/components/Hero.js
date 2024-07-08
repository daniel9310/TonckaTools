// src/components/Hero.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="hero-section bg-primary text-white text-center py-5">
            <Container>
                <h1 className="display-4">Your Tools, Simplified</h1>
                <p className="lead">Discover the best tools to make your work easier and more efficient.</p>
                <Button variant="warning" size="lg">Explora las Herramientas</Button>
            </Container>
        </div>
    );
}

export default Hero;

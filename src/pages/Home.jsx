import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <ProductGrid />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;

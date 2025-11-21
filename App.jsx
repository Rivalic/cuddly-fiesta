import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import NoiseOverlay from './components/NoiseOverlay';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <div className="min-h-screen bg-secondary text-white font-sans relative">
                <NoiseOverlay />
                <Navbar />
                <CartDrawer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                </Routes>
            </div>
        </CartProvider>
    );
}

export default App;

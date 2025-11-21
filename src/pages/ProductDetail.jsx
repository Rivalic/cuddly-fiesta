import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Check, ShoppingCart } from 'lucide-react';
import { products } from '../components/ProductGrid';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedImage, setSelectedImage] = useState(0);

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <div className="text-center">
                    <h2 className="text-3xl font-bold gradient-text mb-4">Product not found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-primary text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <motion.button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
                    whileHover={{ x: -5 }}
                >
                    <ArrowLeft size={20} />
                    <span>Back to Products</span>
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Main Image */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary-light border border-white/5 mb-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-primary text-black px-4 py-2 rounded-full text-sm font-bold">
                                {product.tag}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Product Name */}
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        className={`${i < Math.floor(product.rating)
                                                ? 'text-primary fill-current'
                                                : 'text-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-400">({product.rating} rating)</span>
                        </div>

                        {/* Price */}
                        <div className="mb-8">
                            <span className="text-5xl font-bold gradient-text">
                                ₹{product.price.toLocaleString()}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">About This Product</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                {product.fullDescription}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                                        <span className="text-gray-300">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Add to Cart Button */}
                        <motion.button
                            onClick={handleAddToCart}
                            className="w-full bg-primary text-black py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 glow-purple-strong"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ShoppingCart size={24} />
                            Add to Cart
                        </motion.button>

                        {/* Additional Info */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-secondary-light rounded-lg p-4 border border-white/5">
                                <h3 className="text-sm text-gray-400 mb-1">Lifespan</h3>
                                <p className="text-white font-bold">40-64 weeks</p>
                            </div>
                            <div className="bg-secondary-light rounded-lg p-4 border border-white/5">
                                <h3 className="text-sm text-gray-400 mb-1">Hair Quality</h3>
                                <p className="text-white font-bold">100% Human Hair</p>
                            </div>
                            <div className="bg-secondary-light rounded-lg p-4 border border-white/5">
                                <h3 className="text-sm text-gray-400 mb-1">Base Type</h3>
                                <p className="text-white font-bold">Breathable</p>
                            </div>
                            <div className="bg-secondary-light rounded-lg p-4 border border-white/5">
                                <h3 className="text-sm text-gray-400 mb-1">Maintenance</h3>
                                <p className="text-white font-bold">Easy Care</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    };

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Prevent navigation when clicking add to cart
        addToCart(product);
    };

    return (
        <motion.div
            whileHover={{ y: -10 }}
            onMouseMove={handleMouseMove}
            onClick={handleCardClick}
            className="relative bg-gradient-to-br from-secondary-light to-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 group flex flex-col glow-purple cursor-pointer"
            style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`,
            }}
        >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent shimmer" />
            </div>

            <div className="relative h-64 md:h-80 overflow-hidden">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                    className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/30 glow-purple"
                    whileHover={{ scale: 1.1 }}
                >
                    <span className="flex items-center gap-1">
                        <Zap size={12} className="fill-current" />
                        {product.tag}
                    </span>
                </motion.div>
            </div>

            <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-white line-clamp-1 group-hover:gradient-text transition-all">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-1 text-primary text-sm">
                        <Star size={16} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(126,34,206,0.5)]" />
                        <span className="font-bold">{product.rating}</span>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1 group-hover:text-gray-300 transition-colors">
                    {product.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                    <span className="text-2xl font-bold gradient-text">
                        ₹{product.price.toLocaleString()}
                    </span>
                    <motion.button
                        onClick={handleAddToCart}
                        className="relative bg-primary text-black p-3 rounded-full transition-all active:scale-95 transform glow-purple-strong overflow-hidden group/btn"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ShoppingCart size={20} className="relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-400 to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </motion.button>
                </div>
            </div>

            {/* Corner glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};

export default ProductCard;

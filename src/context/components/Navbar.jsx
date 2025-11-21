import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-40 transition-all duration-300 ${isScrolled
                    ? 'bg-secondary/80 backdrop-blur-xl py-4 shadow-lg shadow-primary/10 border-b border-primary/20'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#"
                    className="text-2xl font-serif font-bold gradient-text"
                    whileHover={{ scale: 1.05 }}
                >
                    SpyHair
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider group"
                            whileHover={{ y: -2 }}
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-400 group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                    <motion.button
                        onClick={toggleCart}
                        className="relative text-gray-300 hover:text-primary transition-colors group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ShoppingCart size={24} className="group-hover:drop-shadow-[0_0_8px_rgba(126,34,206,0.8)] transition-all" />
                        {cartCount > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 bg-primary text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center glow-purple-strong"
                            >
                                {cartCount}
                            </motion.span>
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleCart}
                        className="relative text-gray-300 hover:text-primary transition-colors"
                    >
                        <ShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center glow-purple-strong">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button
                        className="text-gray-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary/90 backdrop-blur-xl border-t border-primary/20"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

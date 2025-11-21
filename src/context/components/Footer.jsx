import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-secondary-light to-black pt-20 pb-10 border-t border-primary/20">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-serif font-bold gradient-text mb-6">SpyHair</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Restoring confidence one strand at a time. India's leading provider of premium non-surgical hair replacement systems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Shop', 'About Us', 'Contact', 'FAQ'].map(item => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary transition-colors relative group inline-block"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3 group">
                                <Phone size={18} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(126,34,206,0.8)] transition-all" />
                                <span className="group-hover:text-gray-300 transition-colors">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={18} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(126,34,206,0.8)] transition-all" />
                                <span className="group-hover:text-gray-300 transition-colors">support@spyhair.in</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <MapPin size={18} className="text-primary mt-1 group-hover:drop-shadow-[0_0_8px_rgba(126,34,206,0.8)] transition-all" />
                                <span className="group-hover:text-gray-300 transition-colors">123, Premium Tower,<br />Bandra West, Mumbai 400050</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-white font-bold mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className="bg-secondary p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all glow-purple"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-primary/20 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} SpyHair. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

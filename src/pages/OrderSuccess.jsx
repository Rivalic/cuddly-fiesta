import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Home } from 'lucide-react';

const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full bg-gradient-to-br from-secondary-light to-secondary rounded-2xl p-8 md:p-12 border border-white/5 text-center"
            >
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 border-4 border-primary mb-8"
                >
                    <CheckCircle size={48} className="text-primary" />
                </motion.div>

                {/* Success Message */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
                >
                    Order <span className="gradient-text">Confirmed!</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg mb-8"
                >
                    Thank you for your order! We've received your order and will start processing it shortly.
                </motion.p>

                {/* Order Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-secondary/50 rounded-xl p-6 mb-8 border border-white/5"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Package size={24} className="text-primary" />
                        <h2 className="text-xl font-bold text-white">What's Next?</h2>
                    </div>
                    <div className="space-y-3 text-left max-w-md mx-auto">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-sm font-bold">1</span>
                            </div>
                            <p className="text-gray-300 text-sm">You'll receive an order confirmation email shortly</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-sm font-bold">2</span>
                            </div>
                            <p className="text-gray-300 text-sm">Our team will prepare your order for shipping</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-sm font-bold">3</span>
                            </div>
                            <p className="text-gray-300 text-sm">Expect delivery within 5-7 business days</p>
                        </div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.button
                        onClick={() => navigate('/')}
                        className="flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold text-lg glow-purple-strong"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Home size={20} />
                        Back to Home
                    </motion.button>
                </motion.div>

                {/* Support Message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-500 text-sm mt-8"
                >
                    Need help? Contact us at{' '}
                    <a href="mailto:support@spyhair.in" className="text-primary hover:underline">
                        support@spyhair.in
                    </a>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default OrderSuccess;

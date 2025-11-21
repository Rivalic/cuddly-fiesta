import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Wallet, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const navigate = useNavigate();
    const { cart, cartTotal, placeOrder } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone must be 10 digits';
        }
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) {
            newErrors.pincode = 'Pincode is required';
        } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Pincode must be 6 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            const orderData = {
                ...formData,
                paymentMethod,
                items: cart,
                total: cartTotal,
                orderDate: new Date().toISOString()
            };
            placeOrder(orderData);
            navigate('/order-success');
        }
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold gradient-text mb-4">Your cart is empty</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-primary text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

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
                    <span>Back to Shopping</span>
                </motion.button>

                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
                    <span className="gradient-text">Checkout</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Forms */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Customer Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-br from-secondary-light to-secondary rounded-2xl p-6 border border-white/5"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Customer Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full bg-secondary border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full bg-secondary border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-gray-400 text-sm mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full bg-secondary border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
                                        placeholder="9876543210"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                        </motion.div>

                        {/* Shipping Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-secondary-light to-secondary rounded-2xl p-6 border border-white/5"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Shipping Address</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Address *</label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className={`w-full bg-secondary border ${errors.address ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none`}
                                        placeholder="Street address, apartment, suite, etc."
                                    />
                                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className={`w-full bg-secondary border ${errors.city ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
                                            placeholder="Mumbai"
                                        />
                                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">State *</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            className={`w-full bg-secondary border ${errors.state ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
                                            placeholder="Maharashtra"
                                        />
                                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Pincode *</label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            className={`w-full bg-secondary border ${errors.pincode ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
                                            placeholder="400001"
                                        />
                                        {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Payment Method */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-secondary-light to-secondary rounded-2xl p-6 border border-white/5"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
                            <div className="space-y-3">
                                {[
                                    { id: 'cod', label: 'Cash on Delivery', icon: Wallet },
                                    { id: 'upi', label: 'UPI Payment', icon: Smartphone },
                                    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard }
                                ].map((method) => (
                                    <motion.button
                                        key={method.id}
                                        onClick={() => setPaymentMethod(method.id)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${paymentMethod === method.id
                                                ? 'border-primary bg-primary/10'
                                                : 'border-white/10 hover:border-white/20'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <method.icon size={24} className={paymentMethod === method.id ? 'text-primary' : 'text-gray-400'} />
                                        <span className="text-white font-medium flex-1 text-left">{method.label}</span>
                                        {paymentMethod === method.id && <CheckCircle size={20} className="text-primary" />}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-secondary-light to-secondary rounded-2xl p-6 border border-white/5 sticky top-24"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

                            {/* Cart Items */}
                            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-white font-medium text-sm line-clamp-1">{item.name}</h3>
                                            <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="text-white font-bold">
                                            ₹{(item.price * item.quantity).toLocaleString()}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing */}
                            <div className="border-t border-white/10 pt-4 space-y-3 mb-6">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Shipping</span>
                                    <span className="text-green-400">FREE</span>
                                </div>
                                <div className="flex justify-between text-white text-xl font-bold pt-3 border-t border-white/10">
                                    <span>Total</span>
                                    <span className="gradient-text">₹{cartTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <motion.button
                                onClick={handlePlaceOrder}
                                className="w-full bg-primary text-black py-4 rounded-full font-bold text-lg glow-purple-strong"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Place Order
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Rajesh Kumar",
        location: "Mumbai",
        rating: 5,
        text: "Absolutely life-changing! The hair system is so natural that even my close friends couldn't tell. The confidence boost is incredible.",
        image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=7e22ce&color=fff&size=128"
    },
    {
        id: 2,
        name: "Amit Sharma",
        location: "Delhi",
        rating: 5,
        text: "Best investment I've ever made. The quality is outstanding and the customer service is top-notch. Highly recommend SpyHair!",
        image: "https://ui-avatars.com/api/?name=Amit+Sharma&background=7e22ce&color=fff&size=128"
    },
    {
        id: 3,
        name: "Vikram Patel",
        location: "Bangalore",
        rating: 5,
        text: "I was skeptical at first, but SpyHair exceeded all my expectations. Comfortable, natural-looking, and easy to maintain.",
        image: "https://ui-avatars.com/api/?name=Vikram+Patel&background=7e22ce&color=fff&size=128"
    },
    {
        id: 4,
        name: "Arjun Mehta",
        location: "Pune",
        rating: 5,
        text: "The transformation is amazing! I look 10 years younger. The team at SpyHair is professional and caring.",
        image: "https://ui-avatars.com/api/?name=Arjun+Mehta&background=7e22ce&color=fff&size=128"
    },
    {
        id: 5,
        name: "Karan Singh",
        location: "Hyderabad",
        rating: 5,
        text: "Undetectable and comfortable. I can swim, exercise, and live my life without any worries. Thank you SpyHair!",
        image: "https://ui-avatars.com/api/?name=Karan+Singh&background=7e22ce&color=fff&size=128"
    },
    {
        id: 6,
        name: "Rohit Desai",
        location: "Chennai",
        rating: 5,
        text: "Premium quality at its finest. The attention to detail and customization options are impressive. Worth every rupee!",
        image: "https://ui-avatars.com/api/?name=Rohit+Desai&background=7e22ce&color=fff&size=128"
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="relative py-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4 border border-primary/30 glow-purple">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        What Our <span className="gradient-text">Customers Say</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Join thousands of satisfied customers who have transformed their lives with SpyHair
                    </p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative bg-gradient-to-br from-secondary-light to-secondary rounded-2xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 group"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote size={48} className="text-primary" />
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-purple" />

                            {/* Customer Info */}
                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                <motion.img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full border-2 border-primary/30"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                />
                                <div>
                                    <h3 className="text-white font-bold text-lg">{review.name}</h3>
                                    <p className="text-gray-400 text-sm">{review.location}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="text-primary fill-current drop-shadow-[0_0_4px_rgba(126,34,206,0.5)]"
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 leading-relaxed relative z-10">
                                "{review.text}"
                            </p>

                            {/* Bottom shimmer effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { number: "10,000+", label: "Happy Customers" },
                        { number: "4.9/5", label: "Average Rating" },
                        { number: "98%", label: "Satisfaction Rate" },
                        { number: "15+", label: "Years Experience" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;

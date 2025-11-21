import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: "LOS ANGELES PREMIUM (Monofilament)",
        price: 8000,
        rating: 4.9,
        tag: "Best Seller",
        description: "Premium lace base for maximum breathability and natural look.",
        fullDescription: "The Mono Hair Patch, also known as a monofilament hair patch, is a popular non-surgical hair replacement solution that uses a breathable monofilament base. This base allows for natural scalp visibility and provides a realistic appearance by individually hand-tying each hair strand into the fine netting.",
        features: [
            "Made with 100% real human hair, often Grade-4A or Remy quality, which is silky, tangle-free, and pre-cut to lengths between 5 to 7 inches",
            "The base is ultra-thin and breathable, often around 0.5 to 0.55 mm thick, with a polyurethane (PU) coating on the perimeter for durability and easy attachment",
            "Lightweight and comfortable for daily wear, suitable for an active lifestyle",
            "Hair can be dyed, colored, styled, and washed like natural hair",
            "Typically lasts between 40 to 60 weeks with proper care",
            "Using modern hand-knotting techniques, ensuring natural hair direction and an undetectable hairline",
            "Attachment can be done using glue, tape, or clips, allowing flexibility in application"
        ],
        image: "https://artello.in/cdn/shop/products/Artello_Silk_Mirage_Smart_Hair_Patch_for_Men_1_1024x1024.jpg"
    },
    {
        id: 2,
        name: "AUSTRALIAN PREMIUM (BMW)",
        price: 17000,
        rating: 5.0,
        tag: "Luxury",
        description: "The ultimate in comfort and durability. Australian craftsmanship.",
        fullDescription: "The BMW Hair Patch is a premium hair replacement solution designed primarily for men experiencing baldness or hair thinning. It is made from 100% real human hair, usually Grade-5A quality, which is matte, tangle-free, and pre-cut to lengths of 5 to 7 inches.",
        features: [
            "A lightweight, breathable base made of 0.35 mm blended 3x optical mono with a 0.45 mm slim polyurethane (PU) zigzag coating on the perimeter",
            "Durable construction with a monofilament cap, double stitching, and scalp-friendly materials for comfort during daily wear",
            "Lifespan of around 48 to 64 weeks with good care",
            "Balanced density, medium to high, for a natural look without bulk",
            "Easy maintenance and washable, suitable for active lifestyles",
            "Attachment options include glue, tape, or clips",
            "Size options typically around 9x6 inches or customizable"
        ],
        image: "https://www.skyhairindia.com/wp-content/uploads/2022/09/E4B0B14E-7841-42A0-95FF-A61DFF1B2159-scaled.jpeg"
    },
    {
        id: 3,
        name: "MONOFILAMENT PREMIUM",
        price: 5000,
        rating: 4.7,
        tag: "Durable",
        description: "Strong monofilament base that lasts longer without compromising style.",
        fullDescription: "The Mono Hair Patch uses a breathable monofilament base that allows for natural scalp visibility and provides a realistic appearance by individually hand-tying each hair strand into the fine netting.",
        features: [
            "100% real human hair, Grade-4A quality",
            "Ultra-thin breathable base (0.5-0.55mm thick)",
            "Lightweight and comfortable for daily wear",
            "Can be dyed, colored, and styled",
            "Lasts 40-60 weeks with proper care",
            "Modern hand-knotting techniques",
            "Flexible attachment options (glue, tape, or clips)"
        ],
        image: "https://artello.in/cdn/shop/products/Artello_Premium_Mono_Smart_Hair_Patch_for_Men_1_1024x1024.jpg"
    },
    {
        id: 4,
        name: "BMW PREMIUM",
        price: 8000,
        rating: 4.8,
        tag: "Popular",
        description: "High-performance system for the active lifestyle.",
        fullDescription: "Premium hair replacement solution with Grade-5A quality human hair. Features a lightweight, breathable base with advanced monofilament construction for maximum comfort and natural appearance.",
        features: [
            "Grade-5A quality human hair",
            "0.35mm blended optical mono base",
            "Lifespan of 48-64 weeks",
            "Medium to high density",
            "Washable and easy maintenance",
            "Multiple attachment options",
            "Customizable sizing"
        ],
        image: "https://www.skyhairindia.com/wp-content/uploads/2022/04/2B4C7882-7765-4557-8AA4-AED58EBC6E0E-scaled.jpeg"
    },
    {
        id: 5,
        name: "Q6 PREMIUM",
        price: 8000,
        rating: 4.8,
        tag: "Versatile",
        description: "French lace front with poly sides and back. The best of both worlds.",
        fullDescription: "Versatile hair system combining French lace front for natural hairline with durable poly sides and back for long-lasting wear. Perfect balance of aesthetics and durability.",
        features: [
            "French lace front for natural hairline",
            "Poly sides and back for durability",
            "100% human hair",
            "Breathable construction",
            "Long-lasting wear",
            "Easy styling and maintenance",
            "Suitable for active lifestyle"
        ],
        image: "https://artello.in/cdn/shop/products/Artello_French_Lace_Q6_Hair_Patch_for_Men_1_1024x1024.jpg"
    },
    {
        id: 6,
        name: "GOLDEN MIRAGE PREMIUM",
        price: 8000,
        rating: 4.9,
        tag: "Ultra Thin",
        description: "Our thinnest skin base for an undetectable hairline.",
        fullDescription: "The Golden Mirage Hair Patch is a premium-quality, non-surgical hair replacement solution designed to provide a natural, seamless look. Features ultra-thin skin base for maximum invisibility.",
        features: [
            "100% natural Remy human hair",
            "Ultra-thin skin base",
            "Soft, silky, and tangle-free",
            "Breathable lightweight construction",
            "Secure adhesion",
            "Natural seamless appearance",
            "Easy maintenance"
        ],
        image: "https://www.skyhairindia.com/wp-content/uploads/2022/04/4654CBB4-56BF-4498-B72D-B6AD8ACBD5E1.jpg"
    }
];

const ProductGrid = () => {
    return (
        <section id="shop" className="py-20 bg-secondary relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Collection</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose from our range of premium hair systems, crafted for every lifestyle and preference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
export { products };

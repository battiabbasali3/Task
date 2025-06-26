import { useState } from "react";

const ProductCard = ({ product }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-md transition">

            {/* Spinner */}
            {!imageLoaded && (
                <div className="flex items-center justify-center h-40 bg-gray-100">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Actual Image */}
            <img
                src={product.image}
                alt={product.name}
                className={`w-full h-64 object-cover rounded-xl mb-4 transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setImageLoaded(true)}
            />

            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;

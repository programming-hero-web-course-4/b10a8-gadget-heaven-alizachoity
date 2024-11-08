import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(CartContext); 

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map(item => (
            <div key={item.product_id} className="flex flex-col lg:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-28- h-28 rounded-lg overflow-hidden">
                  <img src={item.product_image} alt={item.product_title} className="w-full h-full object-fill" />
                </div> 
                <div>
                  <h4 className="font-bold text-lg">{item.product_title}</h4>
                  <p className="text-gray-600">Description: {item.description}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                >
                  Add to Cart
                </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                
                <button
                  onClick={() => removeFromWishlist(item.product_id)}
                  className="text-red-500 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
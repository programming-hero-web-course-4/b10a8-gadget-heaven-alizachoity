import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Modal from './Modal';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortedCart, setSortedCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); 

  useEffect(() => {
    setSortedCart(cart);
  }, [cart]);

  const handlePurchase = () => {
    const total = sortedCart.reduce((acc, product) => acc + product.price, 0); 
    setTotalPrice(total);
    setIsModalOpen(true);
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...sortedCart].sort((a, b) => a.price - b.price);
    setSortedCart(sortedProducts);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className='flex flex-row justify-between'>
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        <div className="flex items-center mb-4">
          <span className="font-bold text-lg mr-4">Total: ${sortedCart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</span>
          <button onClick={handleSortByPrice} className="rounded-full mx-2 border border-gray-300 text-purple-600 px-5 py-2">
            Sort by Price
          </button>
          <button onClick={handlePurchase} className="rounded-full border border-purple-600 text-purple-600 px-5 py-2">
            Purchase
          </button>
        </div>
      </div>
      {sortedCart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {sortedCart.map(product => (            
            <div key={product.product_id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
              <div className="w-28- h-28 rounded-lg overflow-hidden">
                <img src={product.product_image} alt={product.product_title} className="w-full h-full object-cover" />
              </div> 
              <div>
                <h4 className="font-bold">{product.product_title}</h4>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <button
                onClick={() => {
                  removeFromCart(product.product_id);
                  setSortedCart(sortedCart.filter(item => item.product_id !== product.product_id));
                }}
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
          ))}
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={
          <div>
            <p>Purchase successful!</p>
            <p className='text-sm'>Total Amount: ${totalPrice.toFixed(2)}</p> 
          </div>
        } 
      />
    </div>
  );
};

export default Cart;
import React, { useContext, useState } from 'react';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { CartContext } from '../context/CartContext';

const Dashboard = () => {

  const [showCart, setShowCart] = useState(true);
  const [showWishlist, setShowWishlist] = useState(false);
  const { cart } = useContext(CartContext); 

  const toggleCart = () => {
    setShowCart(true);
    setShowWishlist(false); 
  };

  const toggleWishlist = () => {
    setShowWishlist(true);
    setShowCart(false); 
  };

  return (
    <div>
      <header className="p-6 bg-purple-600 text-white text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button onClick={toggleCart} className={`rounded-full px-6 py-2 ${showCart ? 'bg-white text-purple-600' : 'text-white border-white'}`}>
            Cart
          </button>
          <button onClick={toggleWishlist} className={`rounded-full px-6 py-2 ${showWishlist ? 'bg-white text-purple-600' : 'text-white border-white'}`}>
            Wishlist
          </button>
        </div>
      </header>
      
      <main className="p-6">
        {showCart && <Cart items={cart} />}
        {showWishlist && <Wishlist items={cart} />}
      </main>   
    </div>
  );
};

export default Dashboard;

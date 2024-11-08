import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const addToCart = (product) => {
    if (cart.reduce((total, item) => total + item.price, 0) + product.price <= 6000) {
      setCart((prev) => [...prev, product]);
      toast.success(`${product.product_title} added to cart!`);
    } else {
      toast.error("Cart total cannot exceed $6000.");
    }
  };

  const removeFromCart = (productId) => {    
    setCart(prev => prev.filter(item => item.product_id !== productId));  

  };

  const addToWishlist = (product) => {
    if (!wishlist.some(item => item.product_id === product.product_id)) {
      setWishlist((prev) => [...prev, product]);
      toast.success(`${product.product_title} added to wishlist!`);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter(item => item.product_id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist}}>
    {children}
  </CartContext.Provider>
  );
};
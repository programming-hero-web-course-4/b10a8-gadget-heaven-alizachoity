import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const { cart, wishlist } = useContext(CartContext); 

  return (
    <div className="navbar mx-auto hover:text-purple-600  bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">GadgetHaven</Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-3   lg:px-5">
          <Link to="/home" className={location.pathname === '/home' ? 'active' : 'px-5 hover:'}>Home</Link>          
          <Link to="/Statistic" className={location.pathname === '/Statistic' ? 'active' : 'px-5'}>Statistic</Link>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : 'px-5'}>Dashboard</Link>
        </ul>
      </div>
      <div className="navbar-end ">
        <Link to="/Cart" className={location.pathname === '/cart' ? 'active' : 'px-4'}>
          <FaShoppingCart />
          {cart.length > 0 && <span className="badge ">{cart.length}</span>}
        </Link>
        <Link to="/Wishlist" className={location.pathname === '/wishlist' ? 'active' : 'px-5'}>
          <FaHeart />
          {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details'; 
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Modal from './pages/Modal'
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/product/:id" element={<Details />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />          
          <Route path="/modal" element={<Modal />} />
          <Route path="/wishlist" element={<Wishlist />} />           
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </CartProvider>
  );
};

export default App;
import React from 'react';
const Footer = () => {
  return (
    <footer className='footer bg-base-200 footer-center p-10 flex flex-col ' >
      <div className='flex flex-col' >
          <h1 className='text-3xl font-bold '>Gadget Haven</h1>
          <br />
          <p className='text-base'> Leading the way in  cutting-edge technology and innovation </p>
      </div>
      <div className='footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 mx-6' >      
        <nav>
        <h6 classname="footer-title">Services</h6>
        <a classname="link link-hover">Product Support</a>
        <a classname="link link-hover">Order tracking</a>
        <a classname="link link-hover">shipping and Delivery</a>
        <a classname="link link-hover">Return</a>
       </nav>
       <nav>
       <h6 classname="footer-title">Company</h6>
       <a classname="link link-hover">About us</a>
       <a classname="link link-hover">career</a>
       <a classname="link link-hover">Contact</a>  
       </nav>
       <nav>
       <h6 classname="footer-title">Legal</h6>
       <a classname="link link-hover">Terms of use</a>
       <a classname="link link-hover">Privacy policy</a>
       <a classname="link link-hover">Cookie policy</a>
       </nav>
      </div>
    </footer>
  );
};

export default Footer;
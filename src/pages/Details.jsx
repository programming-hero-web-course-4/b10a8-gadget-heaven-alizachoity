import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { CartContext } from '../context/CartContext';

const Details = () => {
  const { id } = useParams();
  const product = productsData.find(item => item.product_id === parseInt(id));
  const { addToCart, addToWishlist } = useContext(CartContext);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <header className="p-8 h-72 bg-purple-600 text-white text-center">
        <h1 className="text-4xl font-bold">Product Details</h1>
        <br />
        <p className="mt-2 text-lg">Explore the latest gadgets that will take your <br /> experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </header>
      <main className="flex w-3/5 mx-auto mb-10 justify-center py-5">
        <div className=" bg-white rounded-2xl border p-5 grid grid-cols-2 w-4/5 max-w-3xl shadow-lg items-center gap-8 mt-[-80px] z-10 relative">
          <div className='w-full h-full'>
            <img src={product.product_image} alt={product.product_title} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h1 className="text-xl font-bold">{product.product_title}</h1>
            <p className="text- font-semibold text-gray-700 my-2">${product.price}</p>
            <p className="text-gray-600 my-4">{product.description}</p>
            <h3 className="font-semibold mt-4">Specifications:</h3>
            <ul className="list-disc pl-5">
              {product.Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <p className="text-green-600 font-semibold mt-4">{product.availability}</p>
            <div className="flex items-center mt-4">
              <p className="font-semibold text-lg">Rating:</p>
              <span className="ml-2 text-yellow-500">⭐⭐⭐⭐</span>
              <span className="ml-2 text-gray-700">4.8</span>
            </div>
            <div className="flex items-center mt-6">
              <button onClick={() => addToCart(product)} className="bg-purple-600 text-white px-6 py-2 rounded-full mr-4">
                Add to Cart
              </button>
              <button onClick={() => addToWishlist(product)} className="text-purple-600 bg-gray-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;

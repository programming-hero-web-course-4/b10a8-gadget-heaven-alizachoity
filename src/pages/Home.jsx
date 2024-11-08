import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import banner from '../assets/banner.jpg';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    setProducts(productsData);
    setShowProducts(true);
  }, []);

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="font-sans bg-gray-50">
      <section className="relative bg-purple-600 text-white text-center p-12 mb-8">
        <h2 className="text-4xl font-bold mb-4">Upgrade Your Tech with Gadget Heaven Accessories</h2>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button 
          onClick={() => setShowProducts(true)} 
          className="mt-6 px-6 py-2 bg-white text-purple-600 font-semibold rounded-full"
        >
          Shop Now
        </button>        
      </section>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div>
          <img src={banner} alt="" className="w-4/5 h-56 border border-spacing-4 border-white shadow-4xl object-fill max-w-xl rounded-xl mx-auto relative z-10 mt-[-90px]" />
        </div>
        <h1 className="text-center text-3xl my-4 font-bold">Explore Cutting-Edge Gadgets</h1>
        <div className="flex space-x-6">
          <aside className="w-1/4 shadow-lg rounded-xl p-4 space-y-2 h-3/4 bg-white">
            <div className="space-y-2">
              {['All Products', 'computers', 'phones', 'Accessories', 'Watches','MacBook'].map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowProducts(true); 
                  }}
                  className={`w-full text-left px-4 py-2 rounded-full text-purple-600 font-semibold 
                    ${selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-purple-600 hover:text-white'} transition`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>
          {showProducts && ( 
            <section className="w-3/4 p-4">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.product_id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-lg text-gray-600">No products found in this category.</p>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
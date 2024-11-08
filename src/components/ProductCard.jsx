import React from 'react';
import { useNavigate } from 'react-router-dom';

const productCard = ({product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.product_id}`); 
  }
  return (
    <div className="border p-4 rounded-lg bg-white">
      <div>
      <img src={product.product_image} alt={product.product_title} className="rounded-xl w-full h-32 object-fill" />
      </div>      
      <h3 className="text-lg mt-4 font-semibold">Name:{product.product_title}</h3>
      <br />
      <p className="text-gray-600">Price:{product.price}</p>
      <button onClick={handleViewDetails} className="mt-4 rounded-full px-9 py-1 border-y-2 border-x-2 border-purple-900">
        View Detail
      </button>
    </div>
  );
 };
export default productCard;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductDesc = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`http://localhost:8080/api/products/${id}`);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Product Not Found</h1>
          <p className="text-gray-700">We’re unable to fetch this product. Please try again later.</p>
          <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Go Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <img src={product.imageUrl} alt={product.name} className="w-full rounded shadow-md" />
      </div>
      <div>
        <h1 className="text-3xl text-white font-bold mb-4">{product.name}</h1>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-4">₹{product.price}</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          Add to Cart
        </button>
        <Link to="/" className="ml-4 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDesc;

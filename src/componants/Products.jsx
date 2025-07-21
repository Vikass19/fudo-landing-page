import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Products = () => {
  const { data: products, loading, error } = useFetch("http://localhost:8080/api/products");

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className='flex items-center justify-center h-screen bg-red-100'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-red-600 mb-4'>Server Down</h1>
          <p className='text-gray-700'>We’re unable to fetch products right now. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-white'>
      {products.map((product) => (
        <div key={product.id} className='border p-2 rounded shadow hover:shadow-lg'>
          <h1 className='text-xl font-bold mb-2'>{product.name}</h1>
          <img src={product.imageUrl} alt={product.name} className='w-full h-48 object-cover mb-2' />
          <Link to={`/products/${product.id}`} className='bg-red-500 text-white px-4 py-2 rounded'>Buy Now</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;

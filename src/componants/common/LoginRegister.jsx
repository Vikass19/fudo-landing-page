import React from 'react';

const LoginRegister = ({ onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center   bg-opacity-10 backdrop-blur-sm z-10'>
      <div className='bg-white rounded-lg p-6 w-[90%] max-w-md'>
        <h2 className='text-xl font-bold mb-4'>Login or Register</h2>
        
        {/* Your form fields here */}
        <input type="email" placeholder="Email" className='w-full border p-2 mb-3 rounded'/>
        <input type="password" placeholder="Password" className='w-full border p-2 mb-3 rounded'/>
        
        <button className='w-full bg-blue-600 text-white py-2 rounded mb-3'>Login</button>
        <button className='w-full border py-2 rounded'>Register</button>

        <button onClick={onClose} className='text-gray-500 mt-4 block text-center hover:underline'>Close</button>
      </div>
    </div>
  );
};

export default LoginRegister;

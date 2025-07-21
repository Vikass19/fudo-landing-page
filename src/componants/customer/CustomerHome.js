import React from 'react';
import Navbar from '../../components/common/Navbar';

const CustomerHome = () => {
  return (
    <div>
      <Navbar role="customer" />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome Customer</h1>
        <p>Browse products below.</p>
      </div>
    </div>
  );
};

export default CustomerHome;

import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            {/* Add your billing form fields here */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {/* Display order items and total here */}
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:outline-none">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

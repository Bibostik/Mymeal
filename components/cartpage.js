"use client"
import React from 'react';

const CartPage = ({ selectedItems }) => {
  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {selectedItems.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg shadow-md mb-4">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">Price: £{item.price}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="border p-4 rounded-lg shadow-md">
            <p className="font-semibold">Total:</p>
            <p className="text-gray-600">£{calculateTotal()}</p>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;


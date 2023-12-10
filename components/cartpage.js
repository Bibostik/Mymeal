"use client"


import React from 'react';
import { useCart } from '@/app/CartContext';
import { useRouter } from 'next/navigation';
import AlertModal from './alertModal';
import { produce } from 'immer'; 

const CartPage = () => {
  const { selectedItems, setSelectedItems } = useCart();
  const router = useRouter();
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  const handleCheckout = () => {
    if (selectedItems.length > 0) {
      router.push('/LoginRegister');
    } else {
      setIsAlertOpen(true);
    }
  };

  const handleCheckoutGuest = () => {
    if (selectedItems.length > 0) {
      router.push('/checkout');
    } else {
      setIsAlertOpen(true);
    }
  };

  const validateItem = (item) => {
  if (!item || typeof item !== 'object') {
    return false;
  }
  if (!item._id || typeof item._id !== 'string') {
    return false;
  }
  if (!item.name || typeof item.name !== 'string') {
    return false;
  }
  if (!item.price || typeof item.price !== 'number' || isNaN(item.price)) {
    return false;
  }
  if (!item.quantity || typeof item.quantity !== 'number' || isNaN(item.quantity)) {
    return false;
  }
  return true;
};



const handleUpdateQuantity = (itemId, change) => {
  setSelectedItems((prevItems) => {
    return produce(prevItems, (draftItems) => {
      const existingItemIndex = draftItems.findIndex((item) => item._id === itemId);

      if (existingItemIndex !== -1) {
        const currentQuantity = typeof draftItems[existingItemIndex].quantity === 'number'
          ? draftItems[existingItemIndex].quantity
          : 0;
        const newQuantity = Math.max(0, currentQuantity + change);
        draftItems[existingItemIndex].quantity = newQuantity;

        if (newQuantity === 0) {
          draftItems.splice(existingItemIndex, 1);
        }
      } else if (change > 0) {
        // Add new item only if quantity is increased
        draftItems.push({ _id: itemId, quantity: 1 });
      }
    });
  });
};


  const handleClearCart = () => {
    setSelectedItems([]);
  };

  // const calculateTotal = () => {
  //   return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

const calculateTotal = () => {
  return selectedItems.reduce((total, item) => {
    if (typeof item.price === 'number' && typeof item.quantity === 'number') {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);
};

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {selectedItems.map((item) => (
              <div key={item._id} className="border p-4 rounded-lg shadow-md mb-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">Price: £{item.price}</p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleUpdateQuantity(item._id, -1)}
                    className="bg-gray-200 px-2 py-1 rounded"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => handleUpdateQuantity(item._id, 1)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="border p-4 rounded-lg shadow-md">
              <p className="font-semibold">Total:</p>
              <p className="text-gray-600">£{calculateTotal()}</p>
            </div>
            <button
              className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={handleCheckout}
            >
              Checkout as a member
            </button>
            <button
              className="mt-4 w-full border border-blue-500 text-blue-500 font-semibold py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none"
              onClick={handleCheckoutGuest}
            >
              Checkout as a guest
            </button>
            <button
              className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 focus:outline-none"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <AlertModal isOpen={isAlertOpen} onRequestClose={() => setIsAlertOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

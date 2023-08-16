import React from 'react';
import { useCart } from '@/CartContext';
import { useRouter } from 'next/router';

const CheckoutPage = () => {
  const { selectedItems } = useCart();
  const router = useRouter();

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  const handlePayment = () => {
    // Simulate payment processing logic
    // You can integrate your actual payment processing here

    // Assuming successful payment
    console.log('Payment successful! Thank you for your order.');
    // Clear the cart after successful payment
    // Clearing the cart can be implemented based on your context logic
    // cart.clearCart();

    // Redirect user to a thank you page or home page
    router.push('/thank-you');
  };

  return (
    <div>
      <div className="container mx-auto p-6 h-screen">
        <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
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
            <button
              className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={handlePayment}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

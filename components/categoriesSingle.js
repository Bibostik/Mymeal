
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { useCart } from '@/app/CartContext';
import { useRouter } from 'next/navigation'; 
import { Elements } from '@stripe/react-stripe-js';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function CheckoutPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const { selectedItems } = useCart();
  const router = useRouter();
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    try {
      setIsPaymentProcessing(true);
      setPaymentError(null);

      const stripe = await stripePromise;
      // ... (same code as before)

      setIsPaymentProcessing(false);
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentError('An error occurred while processing your payment. Please try again.');
      setIsPaymentProcessing(false);
    }
  };

  return (
   <div className="container mx-auto p-6 h-screen">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Elements stripe={stripePromise}>
          <form onSubmit={handlePayment}>
            {/* Selected items */}
            <div>
              {selectedItems.map((item) => (
                <div key={item._id} className="border p-4 rounded-lg shadow-md mb-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">Price: £{item.price}</p>
                </div>
              ))}
            </div>
            
            {/* Payment summary */}
            <div className="border p-4 rounded-lg shadow-md">
              <p className="font-semibold">Total:</p>
              <p className="text-gray-600">£{calculateTotal()}</p>
            </div>
            
            {/* Proceed to payment button */}
            <button
              className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              type="submit"
              disabled={isPaymentProcessing}
            >
              {isPaymentProcessing ? 'Processing...' : 'Proceed to Payment'}
            </button>
            
            {/* Payment error */}
            {paymentError && (
              <p className="text-red-500 mt-2">{paymentError}</p>
            )}
          </form>
        </Elements>
      </div>
    </div>
  );
};
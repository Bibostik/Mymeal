"use client"
// import React from 'react';
// import { useCart } from '@/app/CartContext';
// import { useRouter } from 'next/navigation';

// const CheckoutPage = () => {
//   const { selectedItems } = useCart();
//   const router = useRouter();

//   const calculateTotal = () => {
//     return selectedItems.reduce((total, item) => total + item.price, 0);
//   };

//   const handlePayment = () => {
//     // Simulate payment processing logic
//     // You can integrate your actual payment processing here

//     // Assuming successful payment
//     console.log('Payment successful! Thank you for your order.');
//     // Clear the cart after successful payment
//     // Clearing the cart can be implemented based on your context logic
//     // cart.clearCart();

//     // Redirect user to a thank you page or home page
//     router.push('/thank-you');
//   };

//   return (
//     <div>
//       <div className="container mx-auto p-6 h-screen">
//         <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             {selectedItems.map((item) => (
//               <div key={item._id} className="border p-4 rounded-lg shadow-md mb-4">
//                 <p className="font-semibold">{item.name}</p>
//                 <p className="text-gray-600">Price: £{item.price}</p>
//               </div>
//             ))}
//           </div>
//           <div>
//             <div className="border p-4 rounded-lg shadow-md">
//               <p className="font-semibold">Total:</p>
//               <p className="text-gray-600">£{calculateTotal()}</p>
//             </div>
//             <button
//               className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//               onClick={handlePayment}
//             >
//               Proceed to Payment
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

// import React, { useState } from 'react';
// import { useCart } from '@/app/CartContext';
// import { useRouter } from 'next/navigation'; 
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

// const CheckoutPage = () => {
//   const { selectedItems } = useCart();
//   const router = useRouter();
//   const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
//   const [paymentError, setPaymentError] = useState(null);

//   const calculateTotal = () => {
//     return selectedItems.reduce((total, item) => total + item.price, 0);
//   };

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     try {
//       setIsPaymentProcessing(true);
//       setPaymentError(null);

//       const stripe = await stripePromise;
//       // ... (same code as before)

//       setIsPaymentProcessing(false);
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       setPaymentError('An error occurred while processing your payment. Please try again.');
//       setIsPaymentProcessing(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 h-screen">
//       <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Elements stripe={stripePromise}>
//           <form onSubmit={handlePayment}>
//             {/* Selected items */}
//             <div>
//               {selectedItems.map((item) => (
//                 <div key={item._id} className="border p-4 rounded-lg shadow-md mb-4">
//                   <p className="font-semibold">{item.name}</p>
//                   <p className="text-gray-600">Price: £{item.price}</p>
//                 </div>
//               ))}
//             </div>
            
//             {/* Payment summary */}
//             <div className="border p-4 rounded-lg shadow-md">
//               <p className="font-semibold">Total:</p>
//               <p className="text-gray-600">£{calculateTotal()}</p>
//             </div>
            
//             {/* Proceed to payment button */}
//             <button
//               className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//               type="submit"
//               disabled={isPaymentProcessing}
//             >
//               {isPaymentProcessing ? 'Processing...' : 'Proceed to Payment'}
//             </button>
            
//             {/* Payment error */}
//             {paymentError && (
//               <p className="text-red-500 mt-2">{paymentError}</p>
//             )}
//           </form>
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/app/CartContext';
import { useRouter } from 'next/navigation';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

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

      // Create a Stripe Checkout session here
      const response = await fetch('pages/api/checkout-sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: selectedItems }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentError('An error occurred while processing your payment. Please try again.');
      setIsPaymentProcessing(false);
    }
  };

  return (
    <div className="container mx-auto p-6 h-auto">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Elements stripe={stripePromise}>
          <form action="pages/api/checkout-sessions" method="POST">
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

export default CheckoutPage;

"use client"
import React from 'react'
import CheckoutPage from '@/components/checkout'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from '@/components/checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IX8WuJC9t2dpLOucebwh0e0HGQ2oLfFKXYxeDgbma2IWHqW5c5HEkwTKLwbHtPaaVKtonmDu8bZDlPZwBBqltYp00rOJJ9Sty");

export default function Checkout({ params }) {

  const [clientSecret, setClientSecret] = useState('');

  const price = {
    product_price: `${params.price}`,
  }

  //useEffect(() => {
    /*
    const fetchData = async () => {
      const response = await fetch('/api/stripe', { method: 'POST' });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    };
    fetchData();
    */

    const fetchData = async () => {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify({ price : params.price }), // Pass the price data in the request body
      });

       const data = await response.json();
      setClientSecret(data.clientSecret);
    };

    fetchData()

    //console.log(options)

  //}, []);

  //

  const options = {
    // passing the client secret obtained from the server
    clientSecret: "pi_3NfsZWJC9t2dpLOu1iNGX3g5_secret_SX8TEYeAOVeETUxXpnAPoJ9ZY",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Complete Your Purchase</h1>
          <CheckoutForm />
        </div>
      </div>

    </Elements>
  );
};




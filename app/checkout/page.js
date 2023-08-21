'use client'
import React from 'react'
import CheckoutPage from '@/components/checkout'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function Checkout() {
  const [clientSecret, setClientSecret] = React.useState("");

   React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
    const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      {
        clientSecret && (
<Elements options={options} stripe={stripePromise}>
  
<CheckoutPage/>
      </Elements>
        )
      }
      
      </div>
  )
}

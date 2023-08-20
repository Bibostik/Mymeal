// import { buffer } from 'micro';
// import Stripe from 'stripe'; 

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: '{{item.price}}',
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }


// app/api/stripe/create-checkout-session/page.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { items } = req.body;

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd', // Change to your currency
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Amount in cents
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?success=true`, // Change to your success URL
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?canceled=true`, // Change to your cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
}

import { loadStripe } from '@stripe/stripe-js';

export default async (req, res) => {
  if (req.method === 'POST') {

    const { price } = req.body;

    //console.log(price)

    try {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: { price },
        currency: 'usd',
        payment_method_types: ['card'],
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }

  res.setHeader('Allow', 'POST');
};


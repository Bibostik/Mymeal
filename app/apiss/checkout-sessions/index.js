import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
const handler = async(req, res)=>{
  // if (req.method != 'POST'){
  //   // res.status(405).send({ message: 'Only POST requests allowed' })
  //    console.log('Only POST request are allowed')
  //   return
  // }
  console.log('xxx')
  console.log(req.body)
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

      res.redirect(303, session.url);
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  
}

export default handler

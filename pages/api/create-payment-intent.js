// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = () => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 5000;
};

export default async function handler(req, res) {
  
  // const { items } = req.body;
  console.log('payment intent button fired')
  // console.log('payment intent button fired')
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    
    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

};
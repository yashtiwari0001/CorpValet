import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';

const stripe = new Stripe('sk_test_51QIG0NGO7ICWsLJTIOU1olnsTdvC42RVmE3gxAta4E0XX16J4snmLQgvtSGoR0LoAcXaTjzhSzZ7Hoe3fmSI7tvk00By5YAVn0');

const app = express();
app.use(cors({ origin: 'https://dashing-sunshine-90bae6.netlify.app', optionsSuccessStatus: 200 }));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { totalCost } = req.body;
  try {
    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Total Order',
            },
            unit_amount: Math.round(totalCost * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'https://dashing-sunshine-90bae6.netlify.app/cancel',
    });

    // Send session ID to the frontend
    res.send({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

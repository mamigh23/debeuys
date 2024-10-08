const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const Iyzipay = require('iyzipay');

const iyzipay = new Iyzipay({
    apiKey:import.meta.env.IYZICO_API_KEY,
    secretKey:import.meta.env.IYZICO_SECRET_KEY,
    uri:import.meta.env.MONGO_URL
})

router.post("/", async (req, res) => {
  const { products, user, cargoFee } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "try",
      product_data: {
        name: product.name,
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  if (cargoFee !== 0) {
    lineItems.push({
      price_data: {
        currency: "try",
        product_data: {
          name: "Hızlı Kargo",
        },
        unit_amount: cargoFee * 100,
      },
      quantity: 1,
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_DOMAIN}/success`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
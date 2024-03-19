const express = require("express");
const router = express.Router();
const { createOrder, clearCart } = require("../controllers/orderController");

router.post("/checkout", async (req, res, next) => {
  const { userId, items } = req.body;
  try {
    const orderId = await createOrder(userId, items);
    await clearCart(userId);

    
    res.status(200).json({ message: "Order Placed Succesfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Checkout failed" });
  }
});



module.exports = router;

import express from "express";
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
const orderRouter = express.Router();

// Admin routes
orderRouter.post("/list",adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// User routes
orderRouter.post("/userorders", authUser, userOrders);

// Payment routes
orderRouter.post("/placeorder", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// Verify payment
orderRouter.post("/verifystripe", authUser, verifyStripe);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

export default orderRouter;
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import razorpay from "razorpay";
import { error } from "node:console";

//global variables 
const currency = "usd";
const deliveryCharges = 10;

// gateway initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// placing order using cod
const placeOrder = async (req, res) => {
    
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
    
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order placed successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// placing order using stripe
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const {origin} = req.headers;
        
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        }
        
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        
        
        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100   
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: deliveryCharges * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items: line_items,
            mode: 'payment'
        })
        
        res.json({ success: true, session_url: session.url });
    } 

    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// verify stripe
const verifyStripe = async (req, res) => {
    const {orderId, success} = req.body;
    const userId = req.body.userId;

    try {

        if(success === "true"){
            await orderModel.findByIdAndUpdate(orderId, {payment: true});
            await userModel.findByIdAndUpdate(userId, {cartData: {}});
            res.json({ success: true, message: "Paid" });
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not Paid" });
        }

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// place order using razorpay
const placeOrderRazorpay = async (req, res) => {
    
    try {
        const { userId, items, amount, address } = req.body;
        
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Razorpay",
            payment: false,
            date: Date.now()
        }
        
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: newOrder._id.toString()
        }
        
        const order = await razorpayInstance.orders.create(options, (error, order) => {
            if(error){
                console.log(error);
                return res.json({ success: false, message: error.message });
            }
            else{
                return res.json({ success: true, order });
            }
        });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const verifyRazorpay = async (req, res) => {

    try {
        const {userId, razorpay_order_id} = req.body;

        const orderInfo  = await razorpayInstance.orders.fetch(razorpay_order_id);
        
        if(orderInfo.status === 'paid'){
            await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment: true});
            await userModel.findByIdAndUpdate(userId, {cartData: {}});
            return res.json({ success: true, message: 'Payment verified' });
        }
        else{
            return res.json({ success: false, message: 'Payment not verified' });
        }
                        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    
    }


}

// all orders data for admin panel
const allOrders = async (req, res) => {
     
    try {
        
        const orders = await orderModel.find({});

        res.json({ success: true, orders });
     } 

     catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
     }
}

// user order data for frontend
const userOrders = async (req, res) => {
    try {
       
        const {userId} = req.body;
        const orders = await orderModel.find({userId, $or: [
        { payment: true },
        { paymentMethod: "COD" }
    ]});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// update order status
const updateStatus = async (req, res) => {
    
    try {
        const { orderId, status } = req.body;
        
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: "Status updated successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay }
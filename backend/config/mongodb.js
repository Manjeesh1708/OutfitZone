import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI + "/e-commerce");
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;

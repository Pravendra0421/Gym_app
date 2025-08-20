import mongoose from "mongoose";
const ConnectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set in environment");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo db connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
export default ConnectDb;

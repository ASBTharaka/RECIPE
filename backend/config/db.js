import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dilhanitharu6:bUXUllPcjroWnaZD@cluster0.0ef2jl2.mongodb.net/recipe');
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(1);
  }
};

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userroutes.js";

import  'dotenv/config'
import cartRouter from "./routes/cardroute.js";
import orderRouter from "./routes/orderroute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connected
connectDB();

// API endpoint
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter)


app.get("/", (req,res) => {
  res.send("API working");
});


app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

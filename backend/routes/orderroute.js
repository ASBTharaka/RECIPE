import express from "express"
import authMiddleware from "../middleware/auth.js"
import {placeOrder, verifyorder} from "../controles/ordercontroler.js"


const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

orderRouter.post("/verify",verifyorder);


export default orderRouter;
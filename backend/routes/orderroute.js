import express from "express"
import authMiddleware from "../middleware/auth.js"
import {placeOrder, verifyOrder,userOrders,listOders,updateStatus} from "../controles/ordercontroler.js"


const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

orderRouter.post("/verify",verifyOrder);

orderRouter.post("/userorders",authMiddleware,userOrders);

orderRouter.get('/list',listOders);
orderRouter.post("/status",updateStatus)


export default orderRouter;
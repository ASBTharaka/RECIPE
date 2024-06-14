import orderModel from "../moddels/ordermoddle.js";
import userModel from "../moddels/usermoddle.js";
import Stripe from "stripe"


const stripe =new Stripe(process.env.STRIPE_SECRET_KEY)


//placing user order
   const placeOrder=async(req,res)=>{
            
    const frontend_url="http://localhost:5173";

        try {
          const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address

          })
          await newOrder.save();
          await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

          const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "aud",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 // Assuming item.price is in AUD, converted to cents
            },
            quantity: item.quantity
        }));
        line_items.push({
          price_data:{
            currency:"aud",
            product_data:{
              name:"Delivery Charges"
            },
            unit_amount:2*100
          },
          quantity:1
        })

        const session=await stripe.checkout.sessions.create({
           line_items:line_items,
           mode:'payment',
           success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
           cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })


        res.json({success:true,session_url:session.url})
        
        
        } catch (error) {
          console.log(error);
          res.json({success:false,message:"error"})
        }
   }
   const verifyOrder=async(req,res)=>{
   const{orderId,success}=req.body;
   try {
       if(success=="true"){
                await orderModel.findByIdAndUpdate(orderId,{payment:true});
                res.json({success:true,message:"Paid"});

       }

       else{
        await orderModel.findByIdAndDelete(orderId);
        res.json({success:false,message:"Not paid"});
       }
   } catch (error) {
      console.log(error);
      res.json({success:false,message:"error"})
   }
   }

   //user orders for front end

   const userOrders=async(req,res)=>{
          try {
            const orders=await orderModel.find({userId:req.body.userId});
              res.json({success:true,data:orders})

          } catch (error) {
            console.log(error);
            res.json({success:false,message:"error"})
          }
   }

   //listing oder for addmin panal

   const listOders=async(req,res)=>{

   }

   export{placeOrder,verifyOrder,userOrders,listOders};
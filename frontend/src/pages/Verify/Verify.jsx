import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/storecontex';
import axios from 'axios';

const Verify = () => {

  const [searchparams,setSearchparams]=useSearchParams();
  const success=searchparams.get("success")
  const orderId=searchparams.get("orderId")

  const{url}=useContext(StoreContext);
  const navigate=useNavigate();

  const verifyPayment=async ()=>{
    const response=await axios.post(url+"/api/order/verify",{success,orderId});
    
    if(response.data.success){
     navigate("/myorders");
    }
    else{
      navigate("/")
    }

  }

  useEffect(()=>{
      verifyPayment();
  },[])


  return (
    <div className='verify'>
      <div className="spiner">

      </div>
    </div>
  )
}

export default Verify;
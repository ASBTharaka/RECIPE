import React, { useContext } from 'react'
import './Verify.css'
import { useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/storecontex';

const Verify = () => {

  const [searchparams,setSearchparams]=useSearchParams();
  const success=searchparams.get("success")
  const orderId=searchparams.get("orderId")

  const{url}=useContext(StoreContext);


  return (
    <div>
      
    </div>
  )
}

export default Verify
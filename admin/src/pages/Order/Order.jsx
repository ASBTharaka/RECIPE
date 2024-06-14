import React from 'react';
import './Order.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        setOrders(response.data.data);
        // Calculate total amount
        const amount = response.data.data.reduce((acc, order) => acc + order.amount, 0);
        setTotalAmount(amount);
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      toast.error('Error fetching orders');
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value
      });
      if (response.data.success) {
        toast.success('Order status updated');
        await fetchAllOrders(); // Refresh orders after status change
      } else {
        toast.error('Error updating order status');
      }
    } catch (error) {
      toast.error('Error updating order status');
    }
  };


  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-details'>
        <p>Total Orders: {orders.length}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => (
                  index === order.items.length - 1 ? `${item.name} X ${item.quantity}` : `${item.name} X ${item.quantity}, `
                ))}
              </p>
              <p className='order-item-name'>
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className='order-item-address'>
                <p>{order.address.street},</p>
                <p>{order.address.city},</p>
                <p>{order.address.state}, {order.address.country}, {order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Item: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value='Food Processing'>Food Processing</option>
              <option value='Out For Delivery'>Out For Delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

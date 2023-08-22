"use client"

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/authContext';
import client from '@/sanityClient';

const OrderHistory = () => {
  const user = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const client = client();
      const fetchOrders = async () => {
        try {
          const result = await client.fetch(
            `*[_type == "order" && user._ref == $userId] | order(_createdAt desc) {
              _id,
              items,
              totalAmount,
              orderDate
            }`,
            { userId: user._id }
          );

          setOrders(result);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      fetchOrders();
    }
  }, [user]);

  return (
    <div className="container mx-auto mt-10 px-8">
      <h2 className="text-3xl font-bold mb-4">Order History</h2>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="bg-white p-4 shadow-md rounded-lg">
              <p className="text-gray-600">
                Order Date: {new Date(order.orderDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                Total Amount: £{order.totalAmount.toFixed(2)}
              </p>
              <ul className="mt-2 space-y-2">
                {order.items.map((item) => (
                  <li key={item._key}>{item.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
};

export default OrderHistory;

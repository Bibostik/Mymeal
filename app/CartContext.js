"use client"

// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [selectedItems, setSelectedItems] = useState([]);

//   return (
//     <CartContext.Provider value={{ selectedItems, setSelectedItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };


import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Load cart data from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setSelectedItems(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage whenever cart data changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selectedItems));
  }, [selectedItems]);

  return (
    <CartContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

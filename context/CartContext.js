
import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart,updateCart] = useState([])
  
  const value = [cart,updateCart]
 

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export  default CartContextProvider;

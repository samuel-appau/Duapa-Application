
import React, { createContext, useState, useMemo } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const value=  useMemo(
    () => ({
    name,setName,phone,setPhone,email,setEmail
}),[name,setName],[phone,setPhone],[email,setEmail]
)

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export  default UserContextProvider;

import React, { useState } from 'react'
import UserContext from './UserContext'
export const UserContextProvider = ({children}) => {
   let[cart,setCart] = useState([])
   let[paymentdsip ,setpaymentDisp] = useState(true);
  let[quantityCount , setQuantityCount] = useState(1);
  let[totalprice,setTotalprice] = useState(0);
 
  
  return (
         <UserContext.Provider value={{cart,setCart,paymentdsip,setpaymentDisp,quantityCount , setQuantityCount,totalprice,setTotalprice,}}>
         {children}
         </UserContext.Provider>
  )
}

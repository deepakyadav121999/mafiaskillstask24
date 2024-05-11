import React from 'react'
import {useState,useContext } from 'react';
import './App.css';
import './style.css';
import UserContext from './context/UserContext';
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {

  
   
    const{totalprice,cart,setCart,paymentdsip,setpaymentDisp} =useContext(UserContext)

    const handleQuantityChange = (item, change) => {
      const updatedItems = cart.map(i => {
        if (i.name === item.name) {
          const newQuantity = i.quantity + change;
          if (newQuantity === 0) {
       
            return null;
          }
          return { ...i, quantity: Math.max(newQuantity, 1) };
        }
        return i;
      }).filter(Boolean);
  
      setCart(updatedItems);
    };
    
      let manageText =()=>{
     setpaymentDisp(!paymentdsip)
      
      }
  return (
    <div className="right">
          <h1>Cart</h1>
          <div className="list">
            {cart && cart.map((item) => (
              <div className='inside_list' key={item.name} >
                <div className="list_left">
                  <img src={item.img} alt="" />
                </div>
                <div className="list_right">
                  <p>{item.name}</p>
                  <p className ="ms">${item.price}</p>
                </div>
                <div className="last_btns">
                  <p className='minus' onClick={() => handleQuantityChange(item, -1)}>-</p>
                  <p>{item.quantity}</p>
                  <p className='plus' onClick={() => handleQuantityChange(item, 1)}>+</p>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ${totalprice}</h3>
          {paymentdsip?
            <p className='cart_btn_pyt' onClick={manageText} ><Link to ={'/payment'} style={{textDecoration:'none',color:'white'}}>Proceed To Payment</Link></p>:
            <p className='cart_btn_pyt' onClick={manageText} ><Link to ={'/'} style={{textDecoration:'none',color:'white'}}>Back to Shopping</Link></p>
          }
          
         
        </div>
  )
}

export default Cart
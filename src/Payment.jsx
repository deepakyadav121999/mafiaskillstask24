import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod'); 

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className='payment_container'>
      <div className="payment_select_box">
        <input 
          type="radio" 
          id='Payment1' 
          value='cod'
          checked={paymentMethod === 'cod'} 
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="Payment1">Cash on Delivery</label>
        <input 
          type="radio" 
          id='Payment2' 
          value='atm'
          checked={paymentMethod === 'atm'} 
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="Payment2">Credit Card</label>
      </div>
      {paymentMethod === 'atm' && (
        <div className="credit_card_box">
          <label htmlFor="card">Enter Your Card Number</label>
          <input type="number" placeholder='Card Number'/>
          <label htmlFor="Card">Enter Your Card's Expiry Date</label>
          <input type="year" placeholder='Expiry Date'/>
          <label htmlFor="">Enter Your CVV number</label>
          <input type="number" placeholder='CVV'/>
        </div>
      )}
      <div className="confirm_payment_btns">
        <p className='confirm_btn'><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Confirm Payment</Link></p>
      </div>
    </div>
  );
};

export default Payment;

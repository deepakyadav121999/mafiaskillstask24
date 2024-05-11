import React from 'react'
import { useEffect, useState,useContext } from 'react';
import './App.css';
import './style.css';
import UserContext from './context/UserContext';

const Items = () => {
    const data = [
        {
          "name": "VALOUR BLUE",
          "price": 72,
          "itemsLeft": 3,
          "img": "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
          "name": "JORDAN MARS 270 LONDON",
          "price": 100,
          "itemsLeft": 5,
          "img": "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
          "name": "RACER BLUE",
          "price": 120,
          "itemsLeft": 0,
          "img": "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
          "name": "RACER BLUE",
          "price": 72,
          "itemsLeft": 10,
          "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/214f6074-9556-4d05-822c-17d2eb946875/cosmic-unity-basketball-shoe-nDHKr4.png"
        },
        {
          "name": "VANS",
          "price": 90,
          "itemsLeft": 7,
          "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg"
        },
        {
          "name": "NIKE",
          "price": 30,
          "itemsLeft": 1,
          "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg"
        },
        {
          "name": "REEBOK",
          "price": 56,
          "itemsLeft": 10,
          "img": "https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$"
        }
      ];


      const [added, setAdded] = useState([]);
      const [total, setTotal] = useState(0);
      const{cart,setCart,setTotalprice} =useContext(UserContext);
           
      useEffect(() => {
        let count = 0;
        cart.forEach(item => {
          count += item.price * item.quantity; 
        });
        setTotal(count);
        setTotalprice(count)
      
      }, [cart]);
    
      const handleAddToCart = (item) => {
        const existingItem = cart.find(i => i.name === item.name);
        if (existingItem) {
          
          setAdded(cart.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i));
          setCart(cart.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i))
         
        } else {
    
          setAdded([...cart, { ...item, quantity: 1 }]);
          setCart([...cart, { ...item, quantity: 1 }])
        }
      };
  return (
    <div className="left">
    {data && data.map((item) => (
      <div className='shoe_container' key={item.name} >
        <img src={item.img} alt="" />
        <div className="shoe_details">
          <p className='shoe_name'>{item.name}</p>
          <p>${item.price}</p>
          <p className='add_cartBtn' onClick={() => handleAddToCart(item)}>Add to Cart</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Items
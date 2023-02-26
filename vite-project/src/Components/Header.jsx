import React,{useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order"


const showOrders = (props) =>{
  let Total =0
  props.orders.forEach(el => Total += Number.parseFloat(el.price))
  return(
    <div>
      {props.orders.map(el => (
         <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
        <p className='Total'> Total: {new Intl.NumberFormat().format(Total)}$</p>
    </div>
  )
}

const showNothing = ()=>{
  return(
    <div className='empty'>
     <h2>Please choose something</h2>
    </div>
  )
}
export default function Header(props) {
  let [cartOpen,setCartOpen]=useState(false)
  return (
    <header>
        <div>
            <span className='logo'>House staff</span>
            <ul className='nav'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
     <FaShoppingCart onClick={()=>setCartOpen(cartOpen = !cartOpen)} 
     className={`shop-card-button ${cartOpen && 'active'}`}/>

     
     {cartOpen && (
      <div className='shop-card'>
        {props.orders.length > 0 ?
        showOrders(props) : showNothing() }
      </div>
     )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
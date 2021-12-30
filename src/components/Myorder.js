import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

import { RiDeleteBin6Line } from 'react-icons/ri';

function Myorder({item}) {
    const { increment, decrement, cartItem } = useContext(CartContext);
    return (
        <div className='orderDetails'>
            
                    <div className="orderImage">
                        <img src={item.image} alt='item' className='cartImage'/>
                    </div>
                    
                        <div className="itemSelect">
                            <div className="itemsDesc">
                                <p className="descript1">{item.name}</p>
                                
                                
                                    <div className="selectors">
                                        
                                        <div className='qValue'>
                                            <p className="quantity">{item.qty}</p>
                                        </div>
                                        {/* <div className='selectPad'> */}
                                            <div className="reduceMe">
                                                <p onClick={() => decrement(item)} >-</p>
                                            </div>
                                            <div className="addMe">
                                                <p onClick={() => increment(item)} >+</p>
                                                
                                            </div>
                                
                                       
                                    </div>       
                                 
                                
                    

                            </div>
                           
                        </div>
                        <div className="itemPrice">
                                <p className="amt">{item.price * item.qty}</p>
                                <RiDeleteBin6Line className='cartDel' />
                        </div>
                        
                        
                
                
        </div>
    )
}

export default Myorder


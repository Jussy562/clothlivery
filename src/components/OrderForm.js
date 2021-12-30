import React, { useState, useContext } from 'react'
import {Button} from 'react-bootstrap'
import { FaGreaterThan } from 'react-icons/fa';
import { CgRadioChecked } from 'react-icons/cg';
import CartContext from '../context/cart/CartContext';
import Myorder from './Myorder';

function OrderForm() {
    const { cartItem, DELETE_ITEM, INCREMENT, DECREMENT } = useContext(CartContext);
    // const [price, setPrice] = useState(0);
    // const priceCount = (a, b) => {
    //     return (
    //         a*b
    //     );
            
    
    // }

    // setPrice(cartItem.qty, cartItem.price);
   
 
    return (
   
      <div>
            <div className="Orderform">
            <div className="Ordertab">
                <p>Order Summary</p>
            </div>
            <div className="Orderinfo">
                <div >
                    <ul className='listOfItem'>
                        <li>
                            { cartItem.length == 0 ? (
                                    <div className='empty'>
                                        <div>
                                            <h1>EMPTY</h1>
                                        </div>
                                    </div>
                                ) : ( <div>
                                    { cartItem.map( item => (
                                        <Myorder key={item.id} item={item} />
                                    ))}
                                    </div>
                                )
                            }
                        </li>
                    </ul>
                    

                </div>

                
                <hr/>
                <div className="delivPrice" >
                    <div className="delivtitle">
                        <CgRadioChecked className="delivCheck" />
                        <p>Delivery</p>
                    </div>
                    <div className="totalamount">
                        <p className="dolar">$</p><p>0.00</p>
                    </div>
                </div>
                <hr/>
                <div className="TotalPrice">
                    <div className="total">
                        <h6>TOTAL</h6>
                    </div>
                    <div className="totalamount">
                        <p className="dolar tPrice">$</p><p className="tPrice">0.00</p>
                    </div>
                </div>
                <div className="Orderbtn">
                    <Button className="btn" variant="primary">
                        <p>Check out</p>
                        <FaGreaterThan className="greater" />
                    </Button>
                </div>
            
            </div>
            
            
        </div>
       
      </div>

        
    )
}

export default OrderForm;


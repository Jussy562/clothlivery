import React, { useContext } from 'react';
import {Button} from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import { CgRadioChecked } from 'react-icons/cg';
import CartContext from '../context/cart/CartContext';
import Myorder from './Myorder';

function OrderForm() {
    const { cartItem, totalPrice } = useContext(CartContext);
    const deliv = 10.00;
    // const {Price} = totalPrice;
    
    

    
    
   
    
   
 
    return (
       
   
        <div className='col-12 col-sm-12 col-md-4 col-lg-5' >
           
            <div className="Orderform">
                <div className="Ordertab">
                    <p>Order Summary</p>
                </div>
                <div className="Orderinfo">
                    <div >
                        <ul className='listOfItem'>
                            <li>
                                { cartItem.length === 0 ? (
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
                            <p className="dolar">$ {deliv}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="TotalPrice">
                        <div className="total">
                            <h6>TOTAL</h6>
                        </div>
                        <div className="totalamount">
                            <p className="dolar tPrice">$</p><p className="tPrice">{ totalPrice }</p>
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


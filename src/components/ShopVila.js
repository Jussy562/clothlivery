import React from 'react'
import Store from '../components/Store';
import OrderForm from './OrderForm';


function ShopVila() {
    return (
        <div className="Shoparena col-12 p-5">
            <div className='row'>
                <Store />
                <OrderForm />
            </div>
                
            
               
            
                {/* <Store className='col-12 col-sm-12 col-md-8 col-lg-8 '/> */}
            
                
            
                
                {/* <OrderForm className='col-12 col-sm-12 col-md-4 col-lg-4'/> */}
            
        </div>
    )
}

export default ShopVila;




import React, { useState } from 'react';
import ProductItems from './ProductItems';
import product from '../product';
import {Dropdown} from 'react-bootstrap';
import { RiSearchLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';


function Store() {
    // const products = product.map((item, id) => {
    //     return (
    //         <ProductItems key={id} name={item.name} price={item.price} image={item.image} description={item.description} /> 
    //     )
    // });
    const [ filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let productSearch = product.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
            )
    });

    
  
    return (
        <div  className='col-12 col-sm-12 col-md-8 col-lg-7 '>
            <div className="FilterPlate row">
                <div className="Filter ">
                    <p>Filters</p>
                    <p>Reset filters</p>
                </div>
                <div className="FilterSearch p-0 row">
                <div className='col-12 col-sm-12 col-md-4 mb-2 mb-md-0 '>
                    <Dropdown className="SelectOption  ">
                        
                        <Dropdown.Toggle className="defaultSelect"  id="dropdown-basic">
                            Show All
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="SelectItems">
                            <Dropdown.Item href="#/action-1">Show All</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Women</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
                    
                    
                <div className='col-12 col-sm-12 col-md-5 '>
                    <div className="search ">
                        <input className="inputArea"
                            type="text"
                            value = {filter}
                            onChange={searchText}
                        />
                        <RiSearchLine className="searchIcon" />
                        <RiCloseLine className="searchClose" />


                    </div>
                </div>
                    
                </div>
            </div>

            <div  className="store col-12 ">
                <div className='row'>
                    {
                        productSearch.map((item) => (
                            <ProductItems key={item.id} item={item}  /> 
                        ))
                    }
                </div>

                
            </div>




        

        </div>
   
    )
}

export default Store;


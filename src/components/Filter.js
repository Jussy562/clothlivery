import React, {useState} from 'react'
import SelectBar from './SelectBar'
import SearchBar from './SearchBar'



function Filter() {
    

    return (
        <div className="FilterPlate">
            <div className="Filter">
                <p>Filters</p>
                <p>Reset filters</p>
            </div>
            <div className="FilterSearch">
                <SelectBar />

                <SearchBar />
                <RiDeleteBin6Line />
                <HiShoppingCart />
                

                
    
                
            </div>
        </div>
    )
}

export default Filter;

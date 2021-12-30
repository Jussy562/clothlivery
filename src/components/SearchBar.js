import React from 'react'
import { RiSearchLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';

function SearchBar({ placeholder, data }) {
    return (
        <div className="search">
            <input className="inputArea" type="text"/>
            <RiSearchLine className="searchIcon" />
            <RiCloseLine className="searchClose" />

            
        </div>
    )
}

export default SearchBar;

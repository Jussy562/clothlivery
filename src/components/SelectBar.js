import React from 'react'
import {Dropdown} from 'react-bootstrap'

function SelectBar() {
    return (
        
            <Dropdown className="SelectOption">
                <Dropdown.Toggle className="defaultSelect"  id="dropdown-basic">
                    Show All
                </Dropdown.Toggle>

                <Dropdown.Menu className="SelectItems">
                    <Dropdown.Item href="#/action-1">Show All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Women</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    
       
    )
}

export default SelectBar


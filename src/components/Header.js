import React, { useContext } from 'react'
import {Container, Navbar, Nav, link,} from 'react-bootstrap'
import { BsCart2 } from 'react-icons/bs';
import CartContext from '../context/cart/CartContext';

function Header() {
    const { cartItem } = useContext(CartContext);

    return (
        <div>
            <Navbar  expand="lg" sticky="top" className="navBar">
                <Container className="bar">
                    <Navbar.Brand href="#home"><h1 className="logo">Mycloth<span>livery</span></h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="Menu Active">Home</Nav.Link>
                            <Nav.Link href="#link" className="Menu">Shop</Nav.Link>
                            <Nav.Link href="#link" className="Menu">Contact</Nav.Link>
                            <Nav.Link href="#link" className="Menu">FAQ</Nav.Link>
                            <Nav.Link href="#link" className="Menu">
                                <BsCart2 className='headerCart' />
                                {cartItem.length > 0 && <div className='headerCount'>
                                    <span>{cartItem.length}</span>
                                </div>}
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header

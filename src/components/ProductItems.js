import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { BsCart2 } from 'react-icons/bs';
import CartContext from '../context/cart/CartContext';

function ProductItems({item}) {
    const { addToCart } = useContext(CartContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
  
        <>
            <div className='proCard col-12 col-md-6 col-lg-4 mb-0 py-2 '>
                <div className='card p-cardz '>
                      <img className='card-img-top card-Image'
                      src={item.image} alt='imagephoto' onClick={handleShow} />
                      <div className='card-body pro-details'>
                          <h5 className='card-title'>
                              
                              {item.name}
                          </h5>
                          <p className='card-text'>
                              Price: {item.price}
                          </p>
                          <p className='mb-0'>
                              <BsCart2 className="cart2" onClick={() => addToCart(item)}/>
                          </p>
                      
                      </div>
                </div>
            </div>
              
                    
              
            

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <div>
            <figure>
                <img className="modalImage" alt='' src={item.image}/>
            </figure>
            <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="modalBtn" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="modalBtn" onClick={() => addToCart(item)} >Add to cart</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default ProductItems

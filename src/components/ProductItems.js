import React, { useState, useContext } from 'react'
import { Col, Card, Button, Modal } from 'react-bootstrap';
import { BsCart2 } from 'react-icons/bs';
import CartContext from '../context/cart/CartContext';

function ProductItems({item}) {
    const { addToCart } = useContext(CartContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
  
        <>
            <div>
                <Col >
                    <Card className="proCard">
                        <div className="imagePlate">
                        <Card.Img variant="top" className="cardImage" src={item.image} alt='image' onClick={handleShow} />
                        </div>
                        <div className='cardinfopla'>
                            <Card.Body className="cardBody">
                                <div className="proInfo">
                                    <Card.Title className="proName">{ item.name }</Card.Title>
                                    <Card.Text className="proPrice">
                                        Price: {item.price}
                                    </Card.Text>
                                </div>
                                <div className="procartbtn">

                                    <BsCart2 className="cart2" onClick={() => addToCart(item)}/>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
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

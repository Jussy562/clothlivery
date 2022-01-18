import React from 'react'
import { Col} from 'react-bootstrap'

function MyBanner() {
    return (
        <div className="Container MyBana">
            <Col sm={12} md={6} >
                <div className="heroTextPlate">
                    <div className="heroText" >
                        <h1>Mycloth<span>livery</span></h1>
                        <h2>Your number 1 fashion store is right in your hand</h2>
                        <p>Avoid the queue, Buy online!</p>
                    </div>
                </div>
            </Col>

            <Col sm={12} md={6} >
                <div className="heroImg" >
                    <img src={'/clothe/shopping.png'} alt='produc' />
                </div>
            </Col>
           
        </div>
    )
}

export default MyBanner;


import React from 'react'
import { Col } from 'react-bootstrap'

function MyFooter() {
    return (
        <div className="Foot" >
            <div className="Footer">
                <Col sm={12} md={4} className="About">
                    <h4 className="FootLogo">Mycloth<span>livery</span></h4>
                    <p>Your number 1 online clothing shop. 
                        We bring to you a shoping experience that is simpler, easier,
                        and comfortable. Just a click away and you will have your 
                        goods delivered to you
                    </p>
                </Col>
                <Col sm={12} md={2} className="MenuLink" >
                    <h4>Menu Links</h4>
                    <p><a href="google.com">Home</a></p>
                    <p><a href="google.com">Shop</a></p>
                    <p><a href="google.com">Contact</a></p>
                    <p><a href="google.com">FAQ</a></p>
                    
                </Col>
                <Col sm={12} md={3} className="contact" >
                    <h4>Contact</h4>
                    <p>Address: 03 Weli Eliozu, PH, Rivers</p>
                    <p>Mail: info@myclothlivery.com</p>
                    <p>Phone: +2349035401231</p>
                    
                </Col>
                <Col sm={12} md={3} className="Konet" >
                    <h4>Let's Talk</h4>
                    <p>Custmer's feedback is very 
                        important to us, because we 
                        want to offer the best 
                        service our customers. 
                        We would love to hear from you.
                    </p>
                    
                </Col>
            </div>
    
        </div>
    )
}

export default MyFooter;


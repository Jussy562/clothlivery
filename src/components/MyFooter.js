import React from 'react'; 


function MyFooter() {
    return (
        <div className="Foot" >
            <div className="Footer col-12 ">
                <div className="About col-12 col-md-3 col-lg-3 py-3 py-sm-0 py-xs-0 ">
                    <h4 className="FootLogo">Mycloth<span>livery</span></h4>
                    <p>Your number 1 online clothing shop. 
                        We bring to you a shoping experience that is simpler, easier,
                        and comfortable. Just a click away and you will have your 
                        goods delivered to you
                    </p>
                </div>
                <div className="MenuLink col-12 col-md-3 col-lg-3 py-3 py-sm-0 py-xs-0 " >
                    <h4>Menu Links</h4>
                    <p><a href="google.com">Home</a></p>
                    <p><a href="google.com">Shop</a></p>
                    <p><a href="google.com">Contact</a></p>
                    <p><a href="google.com">FAQ</a></p>
                    
                </div>
                <div  className="contact col-12 col-md-3 col-lg-3 py-3 py-sm-0 py-xs-0 " >
                    <h4>Contact</h4>
                    <p>Address: 03 Weli Eliozu, PH, Rivers</p>
                    <p>Mail: info@myclothlivery.com</p>
                    <p>Phone: +2349035401231</p>
                    
                </div>
                <div className="Konet col-12 col-md-3 col-lg-3 py-3 py-sm-0 py-xs-0 " >
                    <h4>Let's Talk</h4>
                    <p>Custmer's feedback is very 
                        important to us, because we 
                        want to offer the best 
                        service our customers. 
                        We would love to hear from you.
                    </p>
                    
                </div>
            </div>
    
        </div>
    )
}

export default MyFooter;


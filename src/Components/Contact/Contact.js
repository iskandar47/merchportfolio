import React from 'react'
import "./Contact.css"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

function Contact() {
    return (
        <div className="contact-container">
            <Zoom left cascade><h1>GET IN TOUCH</h1></Zoom>
            <div className="contact">
                <div>
                    <Fade left cascade ><img src="https://img.icons8.com/color/96/000000/facebook.png" alt="social-media"/></Fade>
                </div>
                <div>
                    <Fade top cascade ><img src="https://img.icons8.com/color/96/000000/instagram-new.png" alt="social-media"/></Fade>
                </div>
                <div>
                    <Fade bottom cascade ><img src="https://img.icons8.com/color/96/000000/pinterest--v1.png" alt="social-media"/></Fade>
                </div>
                <div>
                    <Fade right cascade ><img src="https://img.icons8.com/color/96/000000/twitter-squared.png" alt="social-media"/></Fade>
                </div>
            </div>
        </div>
    )
}

export default Contact

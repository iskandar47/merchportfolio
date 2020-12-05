import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <p>Copyright 2020 / All rights reserved.</p>
            <div className="contact">
                <p>Follow us on</p>
                <div className="social-media">
                    <div>
                    <img src="https://img.icons8.com/color/96/000000/facebook.png" alt="social-media"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/instagram-new.png" alt="social-media"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/pinterest--v1.png" alt="social-media"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/twitter-squared.png" alt="social-media"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

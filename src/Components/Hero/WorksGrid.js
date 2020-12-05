import React from 'react'
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import "./Hero.css"
import artWork2 from "../../images/work2.jpg" 
import artWork3 from "../../images/work3.jpg" 
import artWork4 from "../../images/work4.jpg" 

function WorksGrid() {
    return (
        <div className="works">
            <Zoom left cascade> <h1>Some of My works</h1> </Zoom>
            <div className="grid-container">
                <div className="left">
                    <Fade left> <img src={artWork4} alt="art-work" /> </Fade>  
                </div>
                <div className="top-right">
                    <Fade right> <img src={artWork2} alt="art-work" /> </Fade> 
                </div>
                <div className="bottom-right">
                    <Fade bottom> <img src={artWork3} alt="art-work" />  </Fade>
                </div>
            </div>
        </div>
    )
}

export default WorksGrid



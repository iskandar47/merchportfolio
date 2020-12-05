import React from 'react'
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import WorksGrid from "./WorksGrid.js"
import "./Hero.css"
import {useHistory} from "react-router-dom"
import Footer from "../Footer/Footer.js"

function Home() {
    const history = useHistory()
    const handleClick = () => {
        history.push("/works")
    }
    return (
        <div className="home">
            <div className="hero">
                <Zoom left cascade>
                    <h1>HEllO, I'M SPARTACUS</h1>
                </Zoom>
                <Fade right>
                    <h2>A Graphic Designer.</h2>
                </Fade>
            </div>
            <div className="about-me">
                <div>
                    <Zoom right cascade>
                        <h1>WHOAMI ?</h1>
                    </Zoom>
                        <Fade right><p>I'm a certified graphic designer with 5 years of experience .</p></Fade>
                        <Fade left>
                            <p>I'm using the Strogest Adobe softwares such as Photoshop and 
                            Illustrator to implement different concepts in a professional designs.</p>
                        </Fade>
                        <Zoom bottom cascade>
                            <button onClick={handleClick}>
                                My Merch Products
                            </button>
                        </Zoom>
                </div>
            </div>
            <WorksGrid />
            <Footer />
        </div>
    )
}

export default Home

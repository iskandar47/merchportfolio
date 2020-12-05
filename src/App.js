import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./index.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Components/Hero/Home.js"
import MyWorks from "./Components/MyWorks/MyWorks.js"
import Contact from "./Components/Contact/Contact.js"
/* import Footer from './Components/Footer/Footer' */

function App() {
    return (
        <div className="app">
            
            <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/merchportfolio"><Home/></Route>
                    <Route path="/works"><MyWorks/></Route>
                    <Route path="/contact"><Contact/></Route>
                </Switch>
            {/* <Footer /> */}
            </Router>
        </div>
    )
}

export default App

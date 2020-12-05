import React from 'react'
import image1 from "./images/biddenHarris.jpeg"
import image2 from "./images/bigfoot.jpeg"
import image4 from "./images/dog.jpeg"
import image5 from "./images/ewpeople.jpeg"
import image6 from "./images/dogie.jpeg"
import image8 from "./images/racoon.jpeg"
import image10 from "./images/threesantas.jpeg"
import image11 from "./images/tokyo.jpeg"
import image12 from "./images/warrior.jpeg"
import{ Grid } from "@material-ui/core"
import ProductCard from './ProductCard'
import "./Myworks.css"
import Footer from '../Footer/Footer'

function MyWorks() {
    const images = [ image1, image2, image4, image5, image6, image8, image10, image11, image12,]
    return (
        <>
        <div className="my-works">
            <h1>Our Products</h1>
            <Grid container spacing={3} className="grid">
                {images.map(item => (
                    <ProductCard photo={item} xs={12} sm={6} md={4} lg={3} />
                ))}
            </Grid>
        </div>
        <Footer />
        </>
    )
}

export default MyWorks

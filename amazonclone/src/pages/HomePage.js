import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import AllProduct from '../Components/AllProduct'
import ImageSlideShow from '../Components/ImageSlideShow'

function HomePage() {
    return (
        <div>
            <Header />
            <Navbar />
            <ImageSlideShow />
            <AllProduct />
        </div>
    )
}

export default HomePage

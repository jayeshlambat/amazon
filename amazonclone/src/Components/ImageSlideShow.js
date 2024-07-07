import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function ImageSlideShow() {
    const images = [
        { url: "images/image1.jpeg" },
        { url: "images/image2.jpeg" },
        { url: "images/image3.jpeg" },
        { url: "images/image4.jpeg" },
        { url: "images/image5.jpeg" }

    ];

    return (
        <div>
            <SimpleImageSlider
                width={'100vw'}
                height={700}
                images={images}
                showBullets={true}
                showNavs={true}
                slideDuration={0.2}
                loop={true}
                autoPlay={true}
                style={{ marginBottom: '-300px' }}
            />
        </div>
    )
}

export default ImageSlideShow

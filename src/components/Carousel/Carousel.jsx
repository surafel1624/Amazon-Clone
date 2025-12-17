import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {carouselImg} from '../../assets/images/carousels/carouselImagesdata'
import classes from './Carousel.module.css'

function CarouselEffect() {
  return (
    <div>
        <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false}>
            {
                carouselImg.map((images) => {
                    return <img src={images} />
                })
            }
        </Carousel>
        <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect
import React from 'react'
import Slider from "react-slick";
import './MySlider.scss';

const MySlider = () => {
    const settings = {
        autoplay: true,
        arrows: false,
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="slider_container">


        <div className='full_slider_sec'>

            <Slider {...settings}>
            <div>
                <img src={ "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"} />
                
            </div>
            <div>
                <img src={ "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"} />            </div>
            <div>
                <img src={ "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"} />            </div>
            <div>
                <img src={ "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"} />            </div>
            </Slider>
        </div>

    </div>
  )
}

export default MySlider;
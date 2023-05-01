import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function SlickSliderComp() {

    {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : false
    };

    const pictures = ['pic1.jpg', 'pic2.jpg','pic3.jpg'];
    return (
      <div>
        <h2></h2>
        <Slider {...settings} className="mx-5">
        {
            pictures.map((pic)=>(
              <div>
                <div 
                style={{
                    backgroundImage : `url(${require(`../img/${pic}`)})`,
                    width : "100%",
                    height : "500px",
                    backgroundSize : "cover",
                    backgroundPosition : "center"
                }} 
                alt="" 
                />
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}


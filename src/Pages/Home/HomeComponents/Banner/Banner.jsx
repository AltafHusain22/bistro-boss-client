/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../../public/Assets/home/01.jpg'
import img2 from '../../../../../public/Assets/home/02.jpg'
import img3 from '../../../../../public/Assets/home/03.png'
import img4 from '../../../../../public/Assets/home/04.jpg'
import img5 from '../../../../../public/Assets/home/05.png'
import img6 from '../../../../../public/Assets/home/06.png'

const Banner = () => {
  return (
    <Carousel className="mx-auto text-center block ">
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
  
    </Carousel>
  );
};

export default Banner;

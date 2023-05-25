/* eslint-disable no-unused-vars */
import HeadingTitle from "../../../../components/shared/HeadingTitle/HeadingTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// import images for category slider
import slide1 from "../../../../../public/Assets/home/slide1.jpg";
import slide2 from "../../../../../public/Assets/home/slide2.jpg";
import slide3 from "../../../../../public/Assets/home/slide3.jpg";
import slide4 from "../../../../../public/Assets/home/slide4.jpg";
import slide5 from "../../../../../public/Assets/home/slide5.jpg";

const CategoryCarosel = () => {
  return (
    <section className="mx-4">
      <HeadingTitle
        subHeading="From 11:00am to 10:00pm"
        mainHeading="ORDER ONLINE"
      ></HeadingTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper md:mx-auto  w-96 mx-auto md:w-2/3 mb-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="md:text-2xl uppercase text-center -mt-10 text-white">
            Salads
          </h3>
          <div className="mt-10"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="md:text-2xl uppercase text-center -mt-10 text-white">
            Soups
          </h3>
          <div className="mt-10"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="md:text-2xl uppercase text-center -mt-10 text-white">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="md:text-2xl uppercase text-center -mt-10 text-white">
            disserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="md:text-2xl uppercase text-center -mt-10 text-white">
            vip salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CategoryCarosel;

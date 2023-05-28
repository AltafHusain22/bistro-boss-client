/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import HeadingTitle from "../../../../components/shared/HeadingTitle/HeadingTitle";
import {  FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`reviews.json`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-20">
      <HeadingTitle
        subHeading="What Our Clients Say"
        mainHeading="TESTIMONIALS"
      ></HeadingTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <div key={review._id}>
              <SwiperSlide>
                <div className="px-20">
                  <div className="flex justify-center">
                    <p className="mb-10">
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        isRequired
                      />
                    </p>
                  </div>
                  <div className="flex justify-center mb-10 text-5xl font-bold">
                    <FaQuoteLeft></FaQuoteLeft>
                  </div>
                  <p className="md:px-20 text-center">{review.details}</p>
                  <p className="text-center mt-10 text-3xl font-bold text-[#CD9003]">
                    {review.name}
                  </p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;

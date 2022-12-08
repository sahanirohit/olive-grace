import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <section className="px-6 py-16 lg:px-16 mx-auto">
      <Swiper
        className="slider"
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <div className="text-center flex flex-col items-center space-y-4">
            <h1 className="uppercase sm:text-4xl text-3xl font-bold">
              What my clients are saying
            </h1>
            <p className="sm:max-w-2xl max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              maxime, delectus, omnis neque autem inventore est odit rem
              quibusdam laborum eum nemo molestias natus quaerat rerum odio iure
              harum earum.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center flex flex-col items-center space-y-4">
            <h1 className="uppercase sm:text-4xl text-3xl font-bold">
              What my clients are saying
            </h1>
            <p className="sm:max-w-2xl max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              maxime, delectus, omnis neque autem inventore est odit rem
              quibusdam laborum eum nemo molestias natus quaerat rerum odio iure
              harum earum.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center flex flex-col items-center space-y-4">
            <h1 className="uppercase sm:text-4xl text-3xl font-bold">
              What my clients are saying
            </h1>
            <p className="sm:max-w-2xl max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              maxime, delectus, omnis neque autem inventore est odit rem
              quibusdam laborum eum nemo molestias natus quaerat rerum odio iure
              harum earum.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;

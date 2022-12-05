import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <section className="px-6 py-16 lg:px-16 mx-auto">
      <Swiper
        className="slider"
        modules={[Navigation]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <div className="text-center flex flex-col items-center space-y-4">
            <h1 className="uppercase text-4xl font-bold">
              What my clients are saying
            </h1>
            <p className="max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              maxime, delectus, omnis neque autem inventore est odit rem
              quibusdam laborum eum nemo molestias natus quaerat rerum odio iure
              harum earum.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center flex flex-col items-center space-y-4">
            <h1 className="uppercase text-4xl font-bold">
              What my clients are saying
            </h1>
            <p className="max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              maxime, delectus, omnis neque autem inventore est odit rem
              quibusdam laborum eum nemo molestias natus quaerat rerum odio iure
              harum earum.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center flex flex-col items-center space-y-4">
            <h1 className="uppercase text-4xl font-bold">
              What my clients are saying
            </h1>
            <p className="max-w-2xl">
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

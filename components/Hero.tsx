import Image from "next/legacy/image";
import React from "react";
import heroImage from "../public/hero-image.jpg";

const Hero = () => {
  return (
    <section className="px-6 lg:px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] min-w-min py-8 gap-8">
      <div className="relative">
        <Image
          src={heroImage}
          className="object-cover"
          layout="fill"
          placeholder="blur"
          alt="hello"
        />
      </div>
      <div className=" bg-orange-100 flex flex-col items-center justify-center text-center space-y-6 px-6">
        <h1 className=" uppercase text-5xl font-bold">About me</h1>
        <p className="text-lg max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          aliquam natus, accusamus rem quae nihil asperiores quod incidunt hic
          dolor necessitatibus repudiandae eius omnis nesciunt.
        </p>
        <div className="">
          <button className="px-6 py-3 bg-black text-white text-xl font-medium">
            LET'S CHAT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

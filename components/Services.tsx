import Image from "next/legacy/image";
import React from "react";
import service1 from "../public/service1.jpg";
import service2 from "../public/service2.jpg";
import service3 from "../public/service3.jpg";

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 overflow-hidden px-6 lg:px-16 grid gap-8 grid-cols-3">
      <div className="relative w-full">
        {/* <div className="absolute w-full -top-10 -left-10 z-0 bg-orange-100"></div> */}
        <div className="relative h-[36rem]">
          <Image
            src={service1}
            alt="service1"
            className="z-[1] w-full object-cover"
            layout="fill"
            placeholder="blur"
          />
        </div>
        <div className="py-6 flex flex-col space-y-3">
          <h1 className="text-3xl uppercase font-bold">Service Package 1</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab
            esse quos quae dicta, sapiente neque consequatur animi sit enim.
          </p>
          <h2 className=" font-bold uppercase">Starting price of $100</h2>
        </div>
      </div>
      <div className="relative w-full">
        <div className="relative h-[36rem]">
          <Image
            src={service2}
            alt="service2"
            className="z-[1] w-full object-cover"
            layout="fill"
            placeholder="blur"
          />
        </div>
        <div className="py-6 flex flex-col space-y-3">
          <h1 className="text-3xl uppercase font-bold">Service Package 2</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab
            esse quos quae dicta, sapiente neque consequatur animi sit enim.
          </p>
          <h2 className=" font-bold uppercase">Starting price of $150</h2>
        </div>
      </div>
      <div className="relative w-full">
        <div className="relative h-[36rem]">
          <Image
            src={service3}
            alt="service3"
            className="z-[1] w-full object-cover"
            layout="fill"
            placeholder="blur"
          />
        </div>
        <div className="py-6 flex flex-col space-y-3">
          <h1 className="text-3xl uppercase font-bold">Service Package 1</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab
            esse quos quae dicta, sapiente neque consequatur animi sit enim.
          </p>
          <h2 className=" font-bold uppercase">Starting price of $200</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;

import Image from "next/legacy/image";
import React from "react";
import img1 from "../public/hero-image.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/service1.jpg";
import img5 from "../public/img5.jpg";

const Follow = () => {
  return (
    <section
      id="contact"
      className="px-6 lg:px-16 w-full pt-16 mx-auto bg-orange-100 relative">
      <h1 className="text-3xl font-semibold text-center">
        Follow me @olivegrace
      </h1>
      <div className="relative pt-8 -bottom-10 flex md:justify-between justify-around mx-auto flex-wrap gap-4">
        <div className="relative w-60 h-60">
          <Image
            src={img1}
            alt="img1"
            className="object-cover"
            placeholder="blur"
            layout="fill"
          />
        </div>
        <div className="relative w-60 h-60">
          <Image
            src={img2}
            alt="img1"
            className="object-cover"
            placeholder="blur"
            layout="fill"
          />
        </div>
        <div className="relative w-60 h-60">
          <Image
            src={img3}
            alt="img1"
            className="object-cover"
            placeholder="blur"
            layout="fill"
          />
        </div>
        <div className="relative w-60 h-60">
          <Image
            src={img4}
            alt="img1"
            className="object-cover"
            placeholder="blur"
            layout="fill"
          />
        </div>
        <div className="relative w-60 h-60">
          <Image
            src={img5}
            alt="img1"
            className="object-cover"
            placeholder="blur"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Follow;

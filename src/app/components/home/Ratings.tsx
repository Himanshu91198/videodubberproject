import React from "react";
import Image from "next/image";
import { Rating } from "@mantine/core";

export const Ratings = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <div className="flex items-center justify-center">
        <Image
          src="https://www.happyscribe.com/assets/landing/g2-leader-award-a392a31dcceba7fa195d3c4919e3fe1ce2c9ec91ee08ccd4b0a6c553a4f6f0b8.svg"
          alt="award"
          width={100}
          height={100}
        ></Image>
        <Image
          src="https://www.happyscribe.com/assets/landing/g2-momentum-leader-award-5e76b21f9f89b72e7c4f247221e7515bc47f71029cb06ddc2c3a01a602c5153f.svg"
          alt="award"
          width={100}
          height={100}
        ></Image>
      </div>
      <Rating className="pt-8" value={4.5} fractions={2} readOnly />
      <p className="flex text-center text-base text-slate-600 pt-2">
        Rated<span className="text-black font-bold ml-1 mr-1"> 4.8/5 </span>
        based on 850+ reviews
      </p>
    </div>
  );
};

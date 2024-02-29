import React from "react";
import Image from "next/image";
import { Article } from "./sub-components/Article";

export const Hero = () => {
  return (
    <div className=" w-full flex flex-col items-start lg:flex-row gap-6 pt-20 px-7">
      <Image
        src="https://www.happyscribe.com/assets/landing/illustrations/banner-left-e999bf666848c3e9fbb877fb4c87f54bdb5c877f6d6e4c4fe9b9a5b66aba919c.webp"
        alt="banner-left"
        width={270}
        height={70}
      ></Image>
      <Article />
      <Image
        src="https://www.happyscribe.com/assets/landing/illustrations/banner-right-54a90ad37b7a569f6e21013f87cfe181652baad2c4fd5041303f1f1c983ea203.webp"
        alt="banner-right"
        width={240}
        height={50}
      ></Image>
    </div>
  );
};

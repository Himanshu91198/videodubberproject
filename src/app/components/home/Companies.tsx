import React from "react";
import Image from "next/image";

const sources = [
  {
    src: "	https://www.happyscribe.com/assets/landing/old-land-bbc-6ce540d3e8e5db34bce6f26eb89fab653d548d0b86b67c25766eb58ee48d92d7.jpg",
  },
  {
    src: "https://www.happyscribe.com/assets/landing/old-land-forbes-1a1c3abb5b615571ec152f6c02e06c1ffb9fc32acd1d7b0fa96d7b60a4a694d6.jpg",
  },
  {
    src: "https://www.happyscribe.com/assets/landing/old-land-spotify-4ac1b6608eef96dfcc9f06df3f59f73bf40eaff417fc5920e01a0f3489dbecbb.jpg",
  },
  {
    src: "https://www.happyscribe.com/assets/landing/old-land-un-15904f809336cbe7b46e0a9b7a0cf86e0c661c1ffcb21d623c26862e4e3b73e5.jpg",
  },
  {
    src: "https://www.happyscribe.com/assets/landing/old-land-dpa-9a142170d4272a3a8e26fec3b0b89ac8c5c1171b14d47545c5774d4661964786.jpg",
  },
  {
    src: "https://www.happyscribe.com/assets/landing/old-land-rte-06cb3d1983462472368f54fd86d3b5c6bab71a406492a04ce20b9268e79a3480.jpg",
  },
];

export const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <p className=" text-base text-slate-600">
        Trusted by 100,000+ users and teams of all sizes.
      </p>
      <div className="flex items-center gap-6 pt-8">
        {sources.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt="company-logos"
            width={120}
            height={50}
          ></Image>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";

export const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 pt-32">
      <h1 className="text-3xl font-extrabold">Features</h1>
      <Image
        src="https://www.happyscribe.com/assets/landing/illustrations/subtitle-editor-145f5d99a593843c3a0771d4f5a06fce37ffb9639281bacad91526a16ca4421c.jpg"
        alt="features"
        width={800}
        height={800}
      ></Image>
    </div>
  );
};

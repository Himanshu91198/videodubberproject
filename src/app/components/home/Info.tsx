import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";

export const Info = () => {
  return (
    <div className="flex px-20 flex-col items-center justify-center gap-32 pt-32">
      <div className="flex items-center gap-32">
        <div className=" pr-52 flex flex-col gap-6">
          <h1 className="flex flex-col gap-5 text-4xl font-extrabold">
            100% Human Translation Customization
          </h1>
          <p className=" text-lg text-slate-600">
            All your translations are done by one of our French to English
            subtitle translators to ensure the absolute highest quality. No
            machines are used here, just the talents and abilities of our
            translators.
          </p>
        </div>
        <Image
          src="https://www.happyscribe.com/assets/landing/illustrations/translation-63e0db588c30d86fe83adf1ab08b84c03a021eee75b66de57a7f121edd8fd10c.jpg"
          alt="image1"
          width={550}
          height={400}
        ></Image>
      </div>
      <div className="flex items-center gap-32">
        <Image
          src="https://www.happyscribe.com/assets/landing/illustrations/format-befc13683c6d8f7868474610a42bca756d21ade77449602cf899f7be20210c35.jpg"
          alt="image2"
          width={550}
          height={400}
        ></Image>
        <div className=" pl-52 flex flex-col gap-6">
          <h1 className="flex flex-col gap-5 text-4xl font-extrabold">
            Format & Hardcode Subtitles
          </h1>
          <p className=" text-lg text-slate-600">
            Once your subtitles have been translated, you can format your
            subtitles to make them match your brand. You can select multiple
            settings and get your video ready to publish. You can also directly
            download the video with burned-in subtitles.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-32">
        <div className=" pr-52 flex flex-col gap-6">
          <h1 className="flex flex-col gap-5 text-4xl font-extrabold">
            Subtitle Customization
          </h1>
          <p className=" text-lg text-slate-600">
            Our translation experts take care of the translation and making sure
            that your subtitles look pretty. But even then you can still decide
            how your subtitles are going to look with our line, CPL, and CPS
            management.
          </p>
        </div>
        <Image
          src="https://www.happyscribe.com/assets/landing/illustrations/limit-4633da879e60923dde8b2e63ef246a99d1a67dcf2c78d63750a34cbcf5c08f20.jpg"
          alt="image3"
          width={550}
          height={400}
        ></Image>
      </div>
      <Button variant="filled" color="indigo" size="xl" radius="md">
        Get Started
      </Button>
    </div>
  );
};

import React from "react";
import { Button } from "@mantine/core";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export const Article = () => {
  return (
    <article className="flex flex-col gap-6 items-center justify-center">
      <div className="flex items-center gap-4  justify-center">
        <Image
          src="https://www.happyscribe.com/assets/flags/4x3/fr-dc20a69849a95e87ec9599159b2e1fd869829dff95daea316c170704f56633a6.svg"
          alt="banner-left"
          width={60}
          height={60}
          style={{
            borderRadius: 4,
          }}
        ></Image>
        <span className="text-5xl">
          <FaArrowRightLong />
        </span>
        <Image
          src="https://www.happyscribe.com/assets/flags/4x3/us-7a83f12ed37df188b41b4dfb10091c9edadd76cc3f19b7a2796c316ecdd07948.svg"
          alt="banner-left"
          width={60}
          height={60}
          style={{
            borderRadius: 4,
          }}
        ></Image>
      </div>
      <h1 className="text-6xl font-extrabold flex items-center text-center">
        French video with English subtitles
      </h1>
      <p className="flex items-center justify-center text-center w-3/4 text-lg text-slate-600">
        Want your videos to reach a wider audience who speaks English? This
        service is ideal for your audiovisual content - from online videos,
        television shows, films, documentaries, marketing content and more!
      </p>
      <Link href="/submit">
        <Button variant="filled" color="indigo" size="xl" radius="md">
          Get Started
        </Button>
      </Link>
    </article>
  );
};
